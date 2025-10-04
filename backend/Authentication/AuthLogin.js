var express = require('express');
var router = express.Router();
const {User} = require('../bin/Database');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
// these is useed to check the token is expry/not  
const Middleware = (req,res,next) => {

    console.log('hi i am Middleware')
    next()
}

/* GET Login Creditails. */
router.get("/Books/Login",Middleware, async (req, res) => {
    try {
        const { email,
            password } = req.query

        if (!email || !password) {
            return res.status(404).json({ message: "Fill the required Details In the Form" })
        }
        // Checking the user is Created account or not
        const IsCreatedUser = await User.findOne({ email })
        if (!IsCreatedUser) {
            return res.status(404).json({ message: "User Not Found!" })
        }
        const GetPassword = await bcrypt.compare(password, IsCreatedUser.password); // true
 
        // if user Found return the emailand message :"account login done and ssedn the token!!!"
        // here we wll check the user data in the db if exits we will send the return statscode(200)==>msg:like login sucessfull !!
        // here if not Correct USer Login data we will send the msg:like (passowrd incorrect or email is incorrect)
        if (GetPassword) {
            const payload = { id: IsCreatedUser._id, email: IsCreatedUser.email };
            const token = jwt.sign(payload, 'tharun2005R', { expiresIn: "1h" });
          

            return res.status(200).json({ message: email, Token: token, AlertMessage: "Account Login sucessfully !" })  // do NOT send password back
        }



    }
    catch (err) {
        console.error(err.message);  // correct spelling
        return res.status(500).json({ message: err.message });
    }
})
// here the route is used for to get the user  data and vaildate the data and save into the db
router.post("/Book/SignUp", async (req, res) => {
    try {

        const { Name, Email, passowrd, ConfirmPassword } = req.body;
        console.log({ Name, Email, passowrd, ConfirmPassword })
        // validate the data if is it is empty string return the alert message :fill the form
        if (!Name || !Email || !passowrd || !ConfirmPassword) {
            return res.status(404).json({ message: "fill the reuird form details" })
        }
        // compare  the both  hash passowrds correct / wrong 
        if (passowrd != ConfirmPassword) {
            return res.status(404).json({ message: "The password is incorrect Please check it" })
        }
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(passowrd, salt);
        const hashConfirmPassword = await bcrypt.hash(ConfirmPassword, salt);
        // after comparing we will add into the Db UserLogiSchema
        const NewUser = new User({
            name: Name,
            email: Email,
            password: hashpassword,
            confirmPassword: hashConfirmPassword,
        })
        await NewUser.save()
        // after saving the user data we will send the statucode(200);like Created a new account!!
        return res.status(200).json({ message: "Created a new account!!" })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: error.message });

    }
})
module.exports = router;

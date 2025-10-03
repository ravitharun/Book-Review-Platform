var express = require('express');
var router = express.Router();

/* GET Login Creditails. */
router.get("/Books/Login", async (req, res) => {
    try {
        const { Email, Password } = req.query
        if (!Email || !Password) {
            return res.statusCode(404).json({ message: "Fill the required Details In the Form" })
        }
        // here we wll check the user data in the db if exits we will send the return statscode(200)==>msg:like login sucessfull !!
        // here if not Correct USer Login data we will send the msg:like (passowrd incorrect or email is incorrect)

    }
    catch (err) {
        return res.statusCode(500).json({ messsage: err.messsage })
    }
})
// here the route is used for to get the user  data and vaildate the data and save into the db
router.post("/Book/SignUp", async (req, res) => {
    try {

        const { Name, Email, passowrd, ConfirmPassword } = req.body;
        if (!Name || !Email || !passowrd || !ConfirmPassword) {
            return res.statusCode(404).json({ message: "fill the reuird form details" })
        }
        if (passowrd != ConfirmPassword) {
            return res.statusCode().json({ message: "The password is incorrect Please check it" })
        }
    } catch (error) {
        return res.statusCode(500).json({ message: error.message })
    }
})
module.exports = router;

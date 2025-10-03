var express = require('express');
var router = express.Router();

// these route Is used to get the Book Data
router.get("/Book/Add", async (req, res) => {
  try {
    const { Tittle, Description, Genre, Author, PublishYear } = req.query
    if (!Tittle || !Description || !Genre || !Author || !PublishYear) {
      return res.json({ message: "Fill the required Detils in the form" })
    }
    // save into the DB

  } catch (error) {
    return res.statusCode(500).json({ message: error.message })
  }
})

// In these route we will get the all books with review also
router.get("Book/GetAllBooks", async (req, res) => {
  try {
    // In these route we will get the all booksn From the DB with review also and return statcode(200)==>{message:BooksAll}  

  }
  catch (err) {
    return res.statusCode(500).json({ message: err.message })
  }
})

// in these route we will delete the  Books based on Id
router.put("/Books/UpdateBook/:Bookid", async (req, res) => {
  try {
    const { BookId } = req.params
    if (!BookId) {
      return res.statusCode(404).json({ message: "BookId is not Found.." })
    }
    // here we will adding the dbquery to delete the book based on the uinque if delete sucess return res.stcode(200)=>removed the book if not statuscode(404)===>'some thing went wrong'
  } catch (error) {
    return res.statusCode(500).json({ message: error.message })
  }
})





// in these route we will delete the  Books based on Id
router.delete("/Books/DeleteBook/:Bookid", async (req, res) => {
  try {
    const { BookId } = req.params
    if (!BookId) {
      return res.statusCode(404).json({ message: "BookId is not Found.." })
    }
    // here we will adding the dbquery to delete the book based on the uinque if delete sucess return res.stcode(200)=>removed the book if not statuscode(404)===>'some thing went wrong'
  } catch (error) {
    return res.statusCode(500).json({ message: error.message })
  }
})


module.exports = router;

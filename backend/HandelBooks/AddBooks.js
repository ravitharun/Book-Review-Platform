var express = require('express');
const { Book } = require('../bin/Database');
var router = express.Router();

// these route Is used to get the Book Data
router.post("/Book/AddBook", async (req, res) => {
  try {
    const { BookData } = req.body
    console.log(BookData, "BookData Adding into the Db")
    if (!BookData.Title || !BookData.Description || !BookData.Genre || !BookData.Author || !BookData.PublishedYear) {
      return res.json({ message: "Fill the required Detils in the form" })
    }
    // save into the DB
    const saveBook = new Book({
      Title: BookData.Title,
      Author: BookData.Author,
      Description: BookData.Description,
      PublishedYear: Number(BookData.PublishedYear),
      Genre: BookData.Genre,
      Email: BookData.Email,

    })
    await saveBook.save()
    return res.status(200).json({ message: "The Book Is Added " })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ message: error.message })
  }
})

// In these route we will get the all books with review also
router.get("/Book/GetAllBooks", async (req, res) => {
  try {
    // In these route we will get the all booksn From the DB with review also and return statcode(200)==>{message:BooksAll}  
    const GetBooks = await Book.find({})
    console.log(GetBooks,'GetBooks')
    res.json({ message: GetBooks })
  }
  catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

// in these route we will delete the  Books based on Id
router.put("/UpdateBook", async (req, res) => {
  try {
    const { BookId } = req.body
    console.log(BookId)
    if (!BookId) {
      return res.status(404).json({ message: "BookId is not Found.." })
    }
    // here we will adding the dbquery to update  the book based on the uinque -->(Bookid) if Updste sucess return res.stcode(200)=>updated the book if not status(404)===>'some thing went wrong'
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})



// in these route we will Update the  Books based on Id
router.delete("/deletebook/:id", async (req, res) => {
  try {
    const id = req.params.id
    console.log(id);

    if (!id) {
      console.log('hi')
      return res.status(404).json({ message: "BookId is not Found.." })
    }

    const DeleteBook = await Book.findByIdAndDelete({ _id: id })
    console.log(DeleteBook)
    return res.status(200).json({ message: "The book is deleted" })
    // here we will adding the dbquery to delete the book based on the uinque if delete sucess return res.stcode(200)=>removed the book if not status(404)===>'some thing went wrong'
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})


router.post("/newreviews", async (req, res) => {
  try {
    const { review } = req.body;
    console.log(review, "review");

    // validation
    if (!review.name || !review.comment) {
      return res.status(400).json({
        message: "Please fill all required fields for the review",
      });
    }

    // find book
    const book = await Book.findById(review.bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    // create new review
    const newReview = {
      reviewer: review.name,
      comment: review.comment,
      rating: review.stars,
      Useremail: review.Useremail,
      BookID: review.bookId,
      date: new Date(),
    };
    console.log(newReview, 'newReview')
    // push to book reviews array
    book.Reviews.push(newReview);
    await book.save();

    res.status(201).json({
      message: "Review added successfully",
      book,
    });
  } catch (error) {
    console.error("Error adding review:", error.message);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});
// /deletereview/${bookid}
router.delete('/deletereview/:bookid/:RefBookid', async (req, res) => {
  try {
    const bookid = req.params.bookid
    const RefBookid = req.params.RefBookid
    console.log(bookid)
    console.log(RefBookid)
    if (!bookid) return res.status(404).json({ message: "Book not found" });
    const updatedBook = await Book.findByIdAndUpdate(
      RefBookid,
      { $pull: { Reviews: { _id: bookid } } },
      { new: true } // return the updated document
    );
    // console.log(deleterevew, 'deleterevew   delete ')

    res.status(201).json({
      message: "Review is Deleted successfully",
    });
  }
  catch (err) {
    console.log(err.message)
    return res.status(500).json({ message: "internal server error" })
  }
})

module.exports = router;

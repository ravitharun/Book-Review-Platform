# Book Review Platform – MERN Stack Assignment (UI phase)

[GitHub Repository](https://github.com/ravitharun/Book-Review-Platform.git)

---

## 📌 Project Overview

The **Book Review Platform** is a web application designed for users to explore books, read reviews, and manage their own book collection.  
This project is built using **React** for the frontend (UI phase) with a modular structure ready for backend integration.

> **Note:** This README reflects the current state of the project (UI phase). Backend and API integration will be added next.

---

## 🟢 Features (UI Phase)

### Authentication

- **Signup Page** – Form to register new users (Name, Email, Password)
- **Login Page** – Form to login users
- Navigation between login and signup pages

### Pages

- **Home Page** – Displays a list of books (static data for now) with pagination
- **Book Details Page** – Shows detailed information about a selected book and reviews (static for now)
- **Add/Edit Book Page** – Form to add new books or edit existing ones
- **Profile Page** – Displays user’s added books and reviews (static data)

### Components

- **Navbar** – Navigation links for Home, Login, Signup, Profile, and Add Book
- **BookCard** – Displays book info in a card layout
- **ReviewItem** – Shows individual review information
- **Pagination** – Handles page navigation
- **StarRating** – Displays and selects ratings
- **ProtectedRoute** – Restricts access to pages for logged-in users

---

## 📂 Frontend Structure

<img src="./image.png" alt="Frontend Structure" />

## 📂 Backend Structure

<img src="./image-1.png" alt="Backend Structure" />

---

## 🛠️ Technologies Used

- **React** – Frontend library for building UI
- **React Router DOM** – Routing and navigation
- **Axios** – For API integration
- **TailwindCSS / Bootstrap** – Styling and responsive design
- **React Toastify** – Notifications and alerts
- **React Icons** – Icons for buttons and navigation

---

## ⚡ API Endpoints

### Authentication APIs

| Method | Endpoint                       | Description               | Payload / Query                              |
| ------ | ------------------------------ | ------------------------- | -------------------------------------------- |
| POST   | `/BookReview/Auth/Book/SignUp` | Create a new user account | `{ Name, Email, passowrd, ConfirmPassword }` |
| GET    | `/BookReview/Auth/Books/Login` | Login user                | Query: `?email=example&password=example`     |

---

### Books APIs

| Method | Endpoint                                      | Description                  | Payload / Notes                                                             |
| ------ | --------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------- |
| POST   | `/BookReview/Book/AddBook`                    | Add a new book               | `{ BookData: { Title, Author, Description, Genre, PublishedYear, Email } }` |
| GET    | `/BookReview/Book/GetAllBooks`                | Get all books (with reviews) | No payload                                                                  |
| PUT    | `/BookReview/UpdateBook`                      | Update book details by ID    | `{ BookId, updatedFields }`                                                 |
| DELETE | `/BookReview/deletebook/:id`                  | Delete a book by ID          | URL param: `id`                                                             |
| POST   | `/BookReview/newreviews`                      | Add a review for a book      | `{ review: { name, comment, stars, Useremail, bookId } }`                   |
| DELETE | `/BookReview/deletereview/:bookid/:RefBookid` | Delete a review from a book  | URL params: `bookid` (review id), `RefBookid` (book id)                     |

---

### Example Request Payloads

**Add Book**

```json
{
  "BookData": {
    "Title": "Atomic Habits",
    "Author": "James Clear",
    "Description": "A book about habits",
    "Genre": "Self-help",
    "PublishedYear": 2018,
    "Email": "user@example.com"
  }
}


## 📌 Contact

**Ravi Tharun**

- GitHub: [ravitharun](https://github.com/ravitharun)
- Email: tharunravi672@gmail.com
- Location: Bangalore, India
```

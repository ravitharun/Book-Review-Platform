const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bookReview', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
console.log("Mongo URI:", process.env.MONGO_URI);

// Define schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // no duplicate emails
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: { type: Date, default: Date.now } // 👈 Auto timestamp
});
const ReviewSchema = new mongoose.Schema(
    {
        reviewer: { type: String, required: true }, // name or email
        comment: { type: String, required: true },
        rating: { type: Number, min: 1, max: 5 }, // optional rating
    },
    { timestamps: true }
);
const BookSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
            trim: true,
        },
        Author: {
            type: String,
            required: true,
            trim: true,
        },
        Description: {
            type: String,
            required: true,
        },
        PublishedYear: {
            type: Number,   // store year as number instead of string
            required: true,
        },
        Genre: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
            match: [/.+\@.+\..+/, "Please enter a valid email address"], // basic validation
        }, Reviews: [ReviewSchema],
    },
    { timestamps: true } // auto adds createdAt & updatedAt
);

// Export model
const Book = mongoose.model("Book", BookSchema);
const User = mongoose.model("User", userSchema);
module.exports = { User, Book };

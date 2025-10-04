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

// Export model
const User = mongoose.model("User", userSchema);
module.exports = User;

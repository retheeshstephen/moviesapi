
const mongoose = require('mongoose')

const Url = process.env.DATABASE;

const connectDB = async () => {
    try {
        await mongoose.connect(Url);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;

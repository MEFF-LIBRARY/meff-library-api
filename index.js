// importing extensions
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authorRouter from "./routes/author.js";
import { bookRouter } from "./routes/book.js";
import reviewRouter from "./routes/review.js";

// connect to database
await mongoose.connect(process.env.MONGO_URI);

// create an express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

// use routes
app.use(authorRouter);
app.use(bookRouter);
app.use(reviewRouter);

// listen for incoming requests
app.listen(3001, () => {
    console.log("App is listening on port 3001")
});
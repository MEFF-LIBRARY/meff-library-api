// importing the schema
import { Schema, Types, model } from "mongoose";



const reviewSchema = new Schema({
    userName: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String},
    book: {type: Types.ObjectId, ref: "books"}
});

export const ReviewModel = model("Review", reviewSchema);
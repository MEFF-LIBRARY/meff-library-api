// importing the schema
import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    rating: {type: Number, required: true},
    comment: {type: String},
    book: {type: Types.ObjectId, ref: "books"}
});

export const ReviewModel = model("Review", reviewSchema);
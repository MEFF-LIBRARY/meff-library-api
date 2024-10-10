// importing the schema
import { Schema, model, Types } from "mongoose";


const reviewSchema = new Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String},
    book: {type: Types.ObjectId, ref: "book"}
});

export const ReviewModel = model("Review", reviewSchema);
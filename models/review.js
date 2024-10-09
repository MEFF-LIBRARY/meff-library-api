// importing the schema
import { Schema, model } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const reviewSchema = new Schema({
    rating: {type: Number, required: true},
    comment: {type: String},
    book: {type: ObjectId, ref: "books"}
});

export const ReviewModel = model("Review", reviewSchema);
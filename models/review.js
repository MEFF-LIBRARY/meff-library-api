// importing the schema
import { Schema, model, Types } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const reviewSchema = new Schema({
    userName: {type: Types.ObjectId, ref: 'user'},
    rating: {type: Number, required: true},
    comment: {type: String},
    book: {type: ObjectId, ref: "books"}
});

export const ReviewModel = model("Review", reviewSchema);
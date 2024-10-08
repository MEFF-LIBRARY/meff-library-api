// creating the controllers
import { ReviewModel } from "../models/review.js";

export const addReview = async (req, res, next) => {
    try {
        console.log(req.body);
        await addReview.create(req.body);
        res.status(201).json('review added!');
    } catch (error) {
        next(error)
    }
}

export const getReview = async (req, res, next) => {
    try {
        const review = await getReview.findById(req.params.id);
        res.status(200).json(review)
    } catch (error) {
        next(error);
    }
}

export const getReviews = async (req, res, next) => {
    try {
        const reviews = await getReviews.find();
        res.status(200).json(reviews);
    } catch (error) {
        next(error);
    }
}


// creating the controllers
import { ReviewModel } from "../models/review.js";

export const addReview = async (req, res, next) => {
    try {
        console.log(req.body);
        await ReviewModel.create(req.body);
        res.status(201).json('review added!');
    } catch (error) {
        next(error)
    }
}

export const getReview = async (req, res, next) => {
    try {
        const review = await ReviewModel.findById(req.params.id);
        res.status(200).json(review)
    } catch (error) {
        next(error);
    }
}

export const getReviews = async (req, res, next) => {
    try {
        const reviews = await ReviewModel.find();
        res.status(200).json(reviews);
    } catch (error) {
        next(error);
    }
}

export const updateReview = async (req, res, next) => {
    try {
        await ReviewModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json("review updated!")
    } catch (error) {
        next(error)
    }
}

export const deleteReview = async (req, res, next) => {
    try {

        await ReviewModel.findByIdAndDelete(req.params.id);
        res.status(200).json('review deleted!')
    } catch (error) {
        next(error);
    }
}


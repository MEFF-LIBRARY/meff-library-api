// creating the controllers
import { ReviewModel } from "../models/review.js";
import { validateAddReview } from "../validators/review.js";
import { validateUpdateReview } from "../validators/review.js";


export const addReview = async (req, res, next) => {
    try {
        const {error, value} = validateAddReview.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        await ReviewModel.create(value);
        res.status(201).json('review added!');
    } catch (error) {
        next(error);
    }
}

export const getReview = async (req, res, next) => {
    try {
        const review = await ReviewModel.findById(req.params.id).populate('user');
        res.status(200).json(review)
    } catch (error) {
        next(error);
    }
}

export const getReviews = async (req, res, next) => {
    try {
        const reviews = await ReviewModel.find().populate('users', 'books');
        res.status(200).json(reviews);
    } catch (error) {
        next(error);
    }
}

export const updateReview = async (req, res, next) => {
    try {
        const {error, value} = validateUpdateReview.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        await ReviewModel.findByIdAndUpdate(req.params.id, value, {new: true});
        res.status(201).json("review updated!")
    } catch (error) {
        next(error);
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


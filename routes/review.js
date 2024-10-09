import { Router } from "express";
import { addReview, deleteReview, getReview, getReviews, updateReview } from "../controllers/review.js";
import { validateReviewSchema } from "../middlewares/review.js";


const reviewRouter = Router();

reviewRouter.post('/reviews', validateReviewSchema, addReview);

reviewRouter.get('/reviews/:id', getReview);

reviewRouter.get('/reviews', getReviews);

reviewRouter.patch('/reviews/:id', validateReviewSchema, updateReview);

reviewRouter.delete('/reviews/:id', deleteReview);


export default reviewRouter;
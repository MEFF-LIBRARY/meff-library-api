import { Router } from "express";
import { addReview, deleteReview, getReview, getReviews, updateReview } from "../controllers/review.js";



const reviewRouter = Router();

reviewRouter.post('/reviews', addReview);

reviewRouter.get('/reviews/:id', getReview);

reviewRouter.get('/reviews', getReviews);

reviewRouter.patch('/reviews/:id', updateReview);

reviewRouter.delete('/reviews/:id', deleteReview);


export default reviewRouter;
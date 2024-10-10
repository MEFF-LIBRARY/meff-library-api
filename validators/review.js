import Joi from "joi";

export const validateAddReview = Joi.object({
    name: Joi.string().required(),
    rating: Joi.number().required(),
    comment: Joi.string(),
    book: Joi.string().required()
});


export const validateUpdateReview = Joi.object({
    name: Joi.string(),
    rating: Joi.number(),
    comment: Joi.string(),
    book: Joi.string()
});
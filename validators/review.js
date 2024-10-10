import Joi from "joi";

export const validateAddReview = Joi.object({
    userName: Joi.string().required(),
    rating: Joi.number().required(),
    comment: Joi.string().required(),
});


export const validateUpdateReview = Joi.object({
    userName: Joi.string(),
    rating: Joi.number(),
    comment: Joi.string(),
});
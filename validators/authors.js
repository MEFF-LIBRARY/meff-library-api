import Joi from "joi";

export const validateAddAuthor = Joi.object({
    name: Joi.string().required(),
    bio: Joi.string().required()

});

export const validateUpdateAuthor = Joi.object({
    name: Joi.string(),
    bio: Joi.string()

});

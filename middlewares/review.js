import Joi from "joi";

export const validateReviewSchema = (req, res, next) => {
    const schema = Joi.object({
        rating: Joi.number().required(),
        comment: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: false, message: error.details[0].message });
    next();
}
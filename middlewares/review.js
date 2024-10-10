import Joi from "joi";

export const validateReviewSchema = (req, res, next) => {
    const schema = Joi.object({
        userName: Joi.string().required(),
        rating: Joi.number().required(),
        comment: Joi.string() //i don't think comment should be required. users should be able to rate without comment
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: false, message: error.details[0].message });
    next();
}
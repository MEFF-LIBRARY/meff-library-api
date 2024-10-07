import { AuthorModel } from "../models/author";

export const addAuthor = async (req, res, next) => {
    // create an author
    try {
        console.log(req.body);
        await AuthorModel.create(req.body);
        // Respond to request
        res.json('Author was added!');
    } catch (error) {
        next(error);
    }
}

export const getAuthor = async (req, res, next) => {
    try {
        // Fetch Authors from database
        const authors = await AuthorModel.find();
        // Return response
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}

export const updateAuthor = async (req, res, next) => {
    try {
        const authors = await AuthorModel.updateOne(req.body);
        // response
        res.status(200).json('Author updated!');
    } catch (error) {
        next(error);
    }
}
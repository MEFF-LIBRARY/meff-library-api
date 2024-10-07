import { AuthorModel } from "../models/author.js";

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
        // Fetch Author from database
        const author = await AuthorModel.find()
        res.status(200).json(author);
    } catch (error) {
        next(error);
    }
}

export const getAuthors = async (req, res, next) => {
    try {
        // Fetch Authors from database
        const authors = await AuthorModel.find();
        // Return response
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
}

export const updateAuthor = async (req, res, next) => {
    try {
        // Update Authors database
        await AuthorModel.updateOne(req.body);
        // response
        res.status(200).json('Author updated!');
    } catch (error) {
        next(error);
    }
}

export const deleteAuthor = async (req, res, next) => {
    try {
        await AuthorModel.deleteOne(req.body)
        res.status(200).json('Author deleted!')
    } catch (error) {
        next(error);
    }
}
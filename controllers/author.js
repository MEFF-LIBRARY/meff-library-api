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
        const author = await AuthorModel.findById(req.params.id)
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
        await AuthorModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        // response
        res.status(200).json('Author updated!');
    } catch (error) {
        next(error);
    }
}

export const deleteAuthor = async (req, res, next) => {
    try {
        await AuthorModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Author deleted!')
    } catch (error) {
        next(error);
    }
}
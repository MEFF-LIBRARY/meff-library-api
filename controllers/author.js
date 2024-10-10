import { AuthorModel } from "../models/author.js";
import { validateAddAuthor } from "../validators/authors.js";
import { validateUpdateAuthor } from "../validators/authors.js";


export const addAuthor = async (req, res, next) => {
    
    try {
        // validate author
        const {error, value} = validateAddAuthor.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // create an author
        const author = await AuthorModel.create(value);
        // Respond to request
        res.json(`Author, ${author.userName} was added!`);
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
        const {error, value} = validateUpdateAuthor.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // Update Authors database
        const author = await AuthorModel.findByIdAndUpdate(req.params.id, value, {new: true});
        // response
        res.status(200).json(`Author, ${author.userName} updated!`);
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
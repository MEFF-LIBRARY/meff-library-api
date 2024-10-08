import { bookModels } from "../models/book.js";

export const postBooks = async (req, res, next) => {
    try {
        const newBook = new bookModels(req.body)

        const books = await newBook.save()

        res.status(201).json("Posted")
    } catch (error) {
       next(error) 
    }
}

export const getBooks = async (req, res, next) => {
   try {
    const book = await bookModels.find()
     res.status(200).json(book)
   } catch (error) {
    next(error)
   }
}
export const getOneBook = async (req, res, next) => {
   try {
     const book = await bookModels.findById(req.params.id)
     res.status(200).json(book)
   } catch (error) {
    next(error)
   }
}

export const updateBooks = async (req, res, next) => {
   try {
     const book = await bookModels.findByIdAndUpdate(req.params.id, req.body, {new: true})
     res.status(200).json(book)
   } catch (error) {
    next(error)
   }
}

export const deleteBooks = async (req, res, next) => {
   try {
     const book = await bookModels.findByIdAndDelete(req.params.id)
     res.status(200).json('Deleted')
   } catch (error) {
    next(error)
   }
}
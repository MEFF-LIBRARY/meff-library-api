import { bookModels } from "../models/book.js";
import Joi from "joi";

const bookValidation = Joi.object({
   title: Joi.string().required(),

   datePublished: Joi.string(),

   description: Joi.string().required(),

   genre: Joi.string(),

   coverPicture: Joi.string()

})

export const postBooks = async (req, res, next) => {
   try {

      const { error } = bookValidation.validate(req.body);

      if (error) {
         return res.status(400).json({ message: error.details[0].message });
      }


      const newBook = new bookModels(req.body)

      const books = await newBook.save()

      res.status(201).json("Book Posted")
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
      const book = await bookModels.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(200).json("Book Updated")
   } catch (error) {
      next(error)
   }
}

export const deleteBooks = async (req, res, next) => {
   try {
      const book = await bookModels.findByIdAndDelete(req.params.id)
      res.status(200).json('Book Deleted')
   } catch (error) {
      next(error)
   }
}
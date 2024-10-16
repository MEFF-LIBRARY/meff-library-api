import { Router } from "express";
import { postBooks, getBooks, getOneBook, updateBooks, deleteBooks } from "../controllers/book.js";
import { coverPictureUpload } from "../../middleware/book.js";

export const bookRouter = Router()

bookRouter.post('/books', coverPictureUpload.single('cover-picture'), postBooks)

bookRouter.get('/books', getBooks)

bookRouter.get('/books/:id', getOneBook)

bookRouter.patch('/books/:id', updateBooks)

bookRouter.delete('/books/:id', deleteBooks)



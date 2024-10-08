import { Router } from "express";
import { postBooks, getBooks, getOneBook, updateBooks, deleteBooks } from "../controllers/book.js";

export const bookRouter = Router()

bookRouter.post('/books', postBooks)

bookRouter.get('/books', getBooks)

bookRouter.get('/books/:id', getOneBook)

bookRouter.patch('/books/:id', updateBooks)

bookRouter.delete('/books/:id', deleteBooks)

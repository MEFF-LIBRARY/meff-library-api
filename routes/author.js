import { Router } from "express";
import { addAuthor, deleteAuthor, getAuthor, getAuthors, updateAuthor } from "../controllers/author.js";
import { validateAuthorSchema } from "../middlewares/authors.js";

// Create a route
const authorRouter = Router();

// Define routes
authorRouter.post('/authors', validateAuthorSchema, addAuthor);

authorRouter.get('/authors', getAuthors);

authorRouter.get('/authors/:id', getAuthor);

authorRouter.patch('/authors/:id', validateAuthorSchema, updateAuthor);

authorRouter.delete('/authors/:id', deleteAuthor);



// Export router
export default authorRouter;
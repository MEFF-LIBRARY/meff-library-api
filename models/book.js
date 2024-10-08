// use "types" for models that have relationships. so in the case of reviews and authors, many reviews map to one book and many books map to one author. Hence, the relationship.
import { Schema, model} from "mongoose";

const bookSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    datePublished: {type: String},
    genre: {type: String},
    coverPicture: {type: String}
})

export const bookModels = model('books', bookSchema)
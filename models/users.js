import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    email:{type: String, required: true},
    password: {type: String, required: true, minlength: 6},
    role: {type: String, enum: ["Author", "Reader"]}
})

export const userModel = model('users', userSchema);
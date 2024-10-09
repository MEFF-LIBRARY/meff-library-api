import { Router } from "express";
import { deleteUser, getAllUsers, getUser, postUser, updateUser } from "../controllers/users.js";

export const userRouter = Router()

userRouter.post('/users', postUser)
userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id', getUser)
userRouter.patch('/users/:id', updateUser)
userRouter.delete('/users/:id', deleteUser)

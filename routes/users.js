import { Router } from "express";
import { deleteUser, getAllUsers, getUser, postUser, updateUser } from "../controllers/users.js";

export const userRouter = Router()

userRouter.post('/user', postUser)
userRouter.get('/user', getAllUsers)
userRouter.get('/user/:id', getUser)
userRouter.patch('/user/:id', updateUser)
userRouter.delete('/user/:id', deleteUser)

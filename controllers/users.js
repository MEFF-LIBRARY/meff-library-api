import { userModel } from "../models/users.js";
import Joi from "joi";

const roles = ['Author', 'Reader'];

const userValidation = Joi.object({
  name: Joi.string().required(),

  email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'org']}}).required(),

  password: Joi.string().min(6).required(),

  role: Joi.string().valid(...Object.values(roles))

})

export const postUser = async (req,res,next) => {
   try {

    const {error} = userValidation.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
  }

     const newUser = new userModel(req.body)
 
     const users = await newUser.save()
 
     res.status(201).json("User Added")
   } catch (error) {
    next(error)
   }
}

export const getAllUsers = async (req,res,next) => {
   try { 
     const users = await userModel.find()
 
     res.status(201).json(users)
   } catch (error) {
    next(error)
   }
}

export const getUser = async (req,res,next) => {
   try { 
     const users = await userModel.findById(req.params.id)
 
     res.status(200).json(users)
   } catch (error) {
    next(error)
   }
}

export const updateUser = async (req,res,next) => {
   try { 
    const {error} = userValidation.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
  }
     const users = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
 
     res.status(201).json("Changes added")
   } catch (error) {
    next(error)
   }
}

export const deleteUser = async (req,res,next) => {
   try { 
     const users = await userModel.findByIdAndDelete(req.params.id)
 
     res.status(201).json("User deleted")
   } catch (error) {
    next(error)
   }
}
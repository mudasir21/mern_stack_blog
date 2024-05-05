import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';




export const signup = async (req, res, next) => {
    console.log(req.body);

    const {username, email, password} = req.body;

    if(!username || !email || !password || username==='' || email==='' || password==='')
    {
        next(errorHandler(400, "All fields are Required"));
    }

    const hashedpassword = bcryptjs.hashSync(password, 10);
    


    const newUser = new User({
        username,
        email,
        password: hashedpassword,
    });

   try{
    await newUser.save();
    res.json("signup successfull");

   }
   catch(error) {
    next(error);
   }
}
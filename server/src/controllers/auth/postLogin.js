import User from "../../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const postLogin = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const userExist = await User.exists({email: email});
        const user = await User.findOne({email: email.toLowerCase()});
        if(userExist && bcrypt.compare(password, user.password)){
            const token = jwt.sign(
                {
                    userId: user._id,
                    email: user.email,
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn:"8h"
                },
            )     
            res.status(200).json({
                userDetails:{
                    email: user.email, 
                    username: user.username,
                    token,
                }
            });
        }else{
            res.status(400).send("Invalid Credentials, Please try again.");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred please try again.")
        
    }
}
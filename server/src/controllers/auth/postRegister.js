import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Channel from "../../models/Channel.js";

export const postRegister = async (req, res)=>{
    
    try {
        const {username , email, password} = req.body;
        
        const userExist = await User.exists({email: email.toLowerCase()});

        if(userExist){
            return res.status(409).send("Email already in use");
        }else{
            const encryptPassword = await bcrypt.hash(password, 10);

            const newChannel = await Channel.create({});
            const user = await User.create({
                username: username,
                email: email.toLowerCase(),
                password: encryptPassword,
                channel: newChannel._id,
            });
            
            //creating jwt token
            const token = jwt.sign(
                {
                    userId: user._id,
                    email: user.email,
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn:"8h",
                },
            )
            return res.status(201).json({
                userDetails:{
                    email, 
                    username,
                    token,
                }
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send("Error occurred please try again.")   
    }
};
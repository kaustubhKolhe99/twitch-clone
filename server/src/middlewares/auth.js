import jwt from 'jsonwebtoken';

const config = process.env;

export const verifyToken = (req, res, next) =>{
    let token = req.body.token || req.query.token || req.headers["authorization"]

    if(!token){
        return res.status(401).send("A token is required for authentication");
    }

    try{
        // token = token.replace(/^Bearer\s+/, "");
        token = token.split(" ")[1];
        const decoded  = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;

    }catch(err){
        console.log(err);
        return res.status(401).send('invalid token');
    }
    return next();

}
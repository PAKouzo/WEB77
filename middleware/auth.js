// const isAuthenticated = (req, res, next) =>{
//     if(isAuthenticated == true)
//     {
//         next()
//     }
//     else {
//         res.status(401).send("Unauthorized")
//     }
// }

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import UsersModel from "../model/users.js";


dotenv.config();
const {TOKEN_SECRET} = process.env;

export const validate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
            if(err) {
                console.log("JWT verification failed: ", err.message);
                next();
            }
            else {
                console.log('Decoded JWT: ', decoded);
            }
    })
    } 
    else {
        res.status(401).json({message: 'Access token is missing'});
    }
    
}

const checkGmail = async (req, res, next) => {
    
    try{
        const {gmail} = req.body;
        if(!gmail) throw new Error("email is required!");

        const existedMail = await UsersModel.findOne({gmail});

        if(existedMail) throw new Error('Email already exists');
        next();
    }
    catch(error){
        res.status(403).send({
            message:error.message,
            data: null,
            success: false
        })
    }
}

export default checkGmail;
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

dotenv.config();
const {TOKEN_SECRET} = process.env;

const validate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
            if(err) {
                console.log("JWT verification failed: ", err.message);
            }
            else {
                console.log('Decoded JWT: ', decoded);
                next();
            }
    })
    } 
    else {
        res.status(401).json({message: 'Access token is missing'});
    }
    
}

export default validate;
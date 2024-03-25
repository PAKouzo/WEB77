import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import checkUsers from "./controllers/checkUsers.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import validate from "./middleware/auth.js";
import router from "./router/index.js";

dotenv.config();

const app = express();
const {PORT, DB_URL, TOKEN_SECRET} = process.env;

app.use(express.json());

mongoose.connect(DB_URL).then(() => {
    console.log("Connect successfully!")
});
// const saltRounds = 10;
// app.post('/register', (req, res) => {
//     const {password} = req.body;
    
//     // var bcrypt = require('bcryptjs');
//     // const salt = bcrypt.genSaltSync(6);
//     // const hash = bcrypt.hashSync("B4c0/\/", salt);
//     const salt = bcrypt.genSaltSync(saltRounds)
//     const hash = bcrypt.hashSync(password, salt)
//     console.log(hash)
//     res.status(201).send({
//         message: "Register successfully",
//         password,
//         hash
//     })
// });

// app.get('/createJWT', (req, res) =>{
//     const secretKey = 'my-secret-key'
//     const userData = {
//         id: "123",
//         username: "Phil Jones",
//         role: 'user'
//     }
//     const token = jwt.sign(userData, secretKey, {expiresIn: "10s"});
//     const token1= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsInVzZXJuYW1lIjoiUGhpbCBKb25lcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzExMTE3OTk1LCJleHAiOjE3MTExMTgwMDV9.Z-gxjM4tLawbCTZUoJ5J3Ud-f4G0u3iWAbKio9U7cyE'
//     console.log(token);
    
//     jwt.verify(token1, secretKey, (err, decoded) => {
//         if(err) {
//             console.log("JWT verification failed: ", err.message);
//         }
//         else {
//             console.log('Decoded JWT: ', decoded)
//         }
//     })
// })

// app.get('/createJWT', (req, res, next) => {
    
//     const userData = {
//         id: "123",
//         username: "Phil Jones",
//         role: 'user'
//     }
//     const token = jwt.sign(userData, TOKEN_SECRET, {expiresIn: "1m"});
//     const token1= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsInVzZXJuYW1lIjoiUGhpbCBKb25lcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzExMTE3OTk1LCJleHAiOjE3MTExMTgwMDV9.Z-gxjM4tLawbCTZUoJ5J3Ud-f4G0u3iWAbKio9U7cyE'
//     console.log(token);
//     next();
// })

// app.get('/validate', )

app.use('/', router)

app.listen(PORT, () => {
    console.log("server is running!");
})

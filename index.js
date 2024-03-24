import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import UsersModel from "./model/users.js";

dotenv.config();

const app = express();
const {PORT, DB_URL, TOKEN_SECRET} = process.env;

app.use(express.json());

mongoose.connect(DB_URL).then(() => {
    console.log("Connect mongoDB successfully!")
});

app.get('/user/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const getUser = await UsersModel.findById(id);
        if(!getUser) throw new Error("Can't find user")
        res.status(201).send({
            data: getUser,
            message: "Find successfully"
        })
    }
    catch(err){
        res.status(403).send({
            data: null,
            message: "err.message"
        })
    }
})

app.listen(PORT, () => {
    console.log("server is running!");
})

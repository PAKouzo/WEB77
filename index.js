import express from "express";
import mongoose from "mongoose";
import UsersModel from "./model/users.js";

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://PAKouzo:XS9DXehkMXK1fjlM@cluster0.9uuuvgt.mongodb.net/').then(() => {
    console.log("Connect successfully!")
});

app.post('/api/v1/users', async (req, res) => {
    try{
        const {userName, email} = req.body;
        if(!userName) throw new Error("userName is required!");
        if(!email) throw new Error("email is required!");
        
        const createUser = await UsersModel.create({
            userName, 
            email
        });
        
        res.status(201).send({
            data: createUser,
            message: "Register successfully!",
            success: true
        });
    }
    catch(error){
        res.status(403).send({
            message:"error.message",
            data: null,
            success: false
        })
    }
})
app.listen(8000, () => {
    console.log("server is running!");
})

import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import router from "./routes/index.js"

dotenv.config();

const app = express();
const {PORT, DB_URL, TOKEN_SECRET} = process.env;

app.use(express.json());

mongoose.connect(DB_URL).then(() => {
    console.log("Connect successfully!")
});

app.use('/', router)

app.listen(PORT, () => {
    console.log("server is running!");
})

import express from "express";
import mongoose from "mongoose";
import createUsers from "./controllers/createUsers.js";
import createPosts from "./controllers/createPosts.js";

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://PAKouzo:XS9DXehkMXK1fjlM@cluster0.9uuuvgt.mongodb.net/').then(() => {
    console.log("Connect successfully!")
});

app.use('/api/v1', createUsers);
app.use('/api/v1', createPosts);

app.listen(8000, () => {
    console.log("server is running!");
})

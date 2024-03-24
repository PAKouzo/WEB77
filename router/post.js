import { Router } from "express";
import post from "../controllers/post.js";

const postRouter = Router();

postRouter.get('/post', post)

export default postRouter;
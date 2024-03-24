import { Router } from "express";
import auth from "../controllers/auth.js";

const authRouter = Router();

authRouter.get('/auth', auth)

export default authRouter;
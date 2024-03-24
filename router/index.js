import { Router } from "express";
import authRouter from "./auth.js";
import postRouter from "./post.js";
import productRouter from "./product.js";

const router = Router();

router.use('/auths', authRouter)
router.use('/posts', postRouter)
router.use('/products', productRouter)

export default router;
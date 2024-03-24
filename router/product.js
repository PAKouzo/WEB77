import { Router } from "express";
import product from "../controllers/product.js";

const productRouter = Router();

productRouter.get('/product', product)

export default productRouter;
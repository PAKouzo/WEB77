import {Router} from 'express';
import login from '../controllers/login.js';
const logInRouter = Router();

logInRouter.post('/login', login)
export default logInRouter;
import {Router} from 'express';
import logout from '../controllers/logout.js';
const logOutRouter = Router();

logOutRouter.post('/logout', logout)
export default logOutRouter;
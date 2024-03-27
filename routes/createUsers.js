import {Router} from 'express';
import createUsers from '../controllers/createUsers.js';
const createUsersRouter = Router();

createUsersRouter.post('/create', createUsers)
export default createUsersRouter;
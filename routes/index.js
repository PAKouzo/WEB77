import {Router} from 'express';
import createUsersRouter from './createUsers.js';
import logInRouter from './login.js';
import logoutRouter from './logout.js';

const router = Router();

router.post('/createUsers', createUsersRouter)
router.post('/loginUsers', logInRouter)
router.post('/logoutUsers', logoutRouter)

export default router;
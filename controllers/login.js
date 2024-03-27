import checkErrors from "../middleware/checkErrors.js";
import { Router} from 'express';
import UsersModel from '../model/users.js'

const login = Router();
login.post('/users', checkErrors,
   function (req, res, next){
        const {userName, email} = req.body;
        const {id} = req.params;
        const createUser = UsersModel.create({
        userName, 
        email,
        id
    })
    res.status(201).send({
        data: createUser,
        message: "Register successfully!",
        success: true
    });
} 
)
       
export default login;
import bcrypt from 'bcryptjs';
import UsersModel from '../model/users.js';
import checkGmail from '../middleware/auth.js';
import dotenv from 'dotenv';

/*
- tạo form đăng ký. ( gmail, password, age, role)
- Check xem gmail đã được dùng chưa
- Nếu k bị trùng -> mã hóa mật khẩu -> thêm user mới vào ds -> đăng ký thành công.
- tạo token.
*/

dotenv.config()

const register = async (req, res) => {
    const {gmail, password, age, role} = req.body;
    checkGmail();

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt) 

    const createUser = UsersModel.create({ 
        gmail,
        password: hash,
        age, 
        role
    });
    res.status(201).send({
        message: "Register successful",
        data: createUser
    })    
}

export default register;
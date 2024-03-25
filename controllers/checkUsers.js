/*
- Lấy ID (findOne), rồi tìm user trong DB theo ID.
- So sánh username của user đó với hàm hardcode.
*/
import UsersModel from "../model/users.js";

const checkUsers = async (req, res, next) => {

    const {id} = req.query;
    const getUser = await UsersModel.findById(id);
    const hardcode = "Dung";
    console.log(getUser.userName)
    const Authen = getUser.userName === hardcode;
    if(Authen){
        next()
    }
    else{
        res.status(401).send("Unauthorized!")
    }
}
  
export default checkUsers;
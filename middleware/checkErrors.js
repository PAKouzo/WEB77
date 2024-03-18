import UsersModel from "../model/users.js";
const checkErrors = async (req, res, next) => {
    const {userName, email} = req.body;
    try{
        if(!userName) throw new Error("userName is required!");
        if(!email) throw new Error("email is required!");

        const existedMail = await UsersModel.findOne({email});
        const existedUserName = await UsersModel.findOne({userName});

        if(existedMail) throw new Error('Email already exists');
        if(existedUserName) throw new Error('Username already exists');

        
        next();
    }
    catch(error){
        res.status(403).send({
            message:error.message,
            data: null,
            success: false
        })
    }
}
export default checkErrors;
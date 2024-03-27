
import UsersModel from '../model/users.js'

const createUsers = async (req, res) => {
    const {username, password} = req.body;
    try{
        if(!username) throw new Error("username is required!");

        const existedUserName = await UsersModel.findOne({username});

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
       
export default createUsers;
import bcryptjs from 'bcryptjs';
export const register = async (req, res) => {
    try{
        const {gmail, username} = req.body;
        const gmailExist = await User.findOne({gmail})
        if(gmailExist)
        {
            return res.status(400).json({message: 'Email already exists!'});
        }
;    }
    catch(error){
        return res.status(500).json(
            {
                name: error.name,
                message: error.message
            }
        )
    }
}
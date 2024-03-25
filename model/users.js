import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    gmail: {
        type: String,
        required: true, //required: yêu cầu email là thông tin bắt buộc.
        unique: true //unique: đảm bảo rằng email của user là duy nhất, không bị trùng.
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    role: {
        type: String,
        default: "member"
    }
});
const UsersModel = mongoose.model('users', userSchema);
export default UsersModel;

import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    id: Object
});
const UsersModel = mongoose.model('users', userSchema);
export default UsersModel;

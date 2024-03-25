import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    userName: String,
    content: String
});

const PostsModel = mongoose.model('posts', postSchema);
export default PostsModel;
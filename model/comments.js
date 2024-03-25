import mongoose from 'mongoose';
const commentSchema = new mongoose.Schema({
    postId: String,
    content: String,
    authorId: String
});

const CommentsModel = mongoose.model('comments', commentSchema);
export default CommentsModel;
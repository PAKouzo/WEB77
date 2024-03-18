import {Router} from 'express';
import PostsModel from '../model/post.js';
import createUsers from './createUsers.js';

const createPosts = Router();
createPosts.post('/posts/:userName',
   function (req, res, next){
        const {content} = req.body;
        const {userName} = req.params;
        const createPost = PostsModel.create({
        userName: createUsers.userName,
        content
    })
    res.status(201).send({
        data: createPost,
        message: "Create post successfully!",
        success: true
    });
} 
)

export default createPosts;
import React from 'react';
import c from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            MyPosts
            <div>
                <textarea name="" id="" cols="15" rows="1"></textarea>
                <button>Add Post </button>
            </div>
            <div className={c.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPost;
import React from 'react';
import AddPostContainer from './AddPost/AddPostContainer';
import classes from './PostPage.module.css';

const PostPage = () => {
    return (
        <div className={classes.bodyPage}>
            <AddPostContainer />
            <div className={classes.footer}></div>
        </div>
    )
}

export default PostPage;
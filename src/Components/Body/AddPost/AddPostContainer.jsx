import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AddPost from './AddPost';
import { addNewPostActionCreate, updateNewPostTextActionCreate, addNewPostsActionCreate } from '../../../redux/posts-reducer';

const AddPostContainer = (props) => {

    const [addButton, setAddButton] = useState(true)
    
    useEffect(()=> {
        const posts = (
            localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : []
        )
        props.addNewPostsActionCreate(posts)
    }, [])   

    const updateStateButton = () => {
        setAddButton(!addButton)
    }
    
    return (
        <div>
            <AddPost 
                updateStateButton={updateStateButton}
                addButton={addButton}
                newPostText={props.newPostText}
                posts={props.posts}
                updateNewPostTextAC={props.updateNewPostTextActionCreate}
                addNewPost={props.addNewPostActionCreate}
                updateCheckBoxStatus={props.updateCheckBoxStatusActionCreate}
                postCount={props.postCount}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.postPage.posts,
    newPostText: state.postPage.newPostText,
    postCount: state.postPage.postCount,
})



export default connect(mapStateToProps, { addNewPostActionCreate, updateNewPostTextActionCreate, addNewPostsActionCreate })(AddPostContainer)


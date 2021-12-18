import React from 'react';
import classes from './AddPost.module.css';
import Posts from './Post/Posts';

const AddPost = ({ 
    posts, updateNewPostTextAC, addNewPost, addButton, newPostText, updateStateButton, postCount
}) => {

    const postElements = posts
        .map(p => <Posts message={p.message} id={p.id} status={p.status} />)

    const onPostChange = (event) => {
        let text = event.target.value
        updateNewPostTextAC(text)
    }

    const onSendNewPost = () => {
        addNewPost()
    }

    return (
        <div>
            <div className={classes.newPost}>
                <div className={classes.counter}>
                    <h2>{postCount}</h2>
                </div>
                <div><button className={classes.createNewPost} onClick={updateStateButton}>+</button></div>
            </div>
            <div>
            {!addButton &&
                 <div className={classes.addPost}>
                    <div>
                        <input 
                            style={
                                { width: '200px', height: '20px', borderRadius: '30px', 
                                    outline: 'none', marginRight: '30px', zoom: '1.2' }
                            } 
                            onChange={onPostChange} 
                            value={newPostText} 
                        />
                    </div>
                    <div><button style={{ zoom: '1.1', marginTop: '5px', borderRadius: '3px' }} onClick={onSendNewPost}>Add new Post</button></div>
                </div>
            }
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default AddPost;
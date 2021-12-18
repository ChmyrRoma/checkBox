const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_NEW_POSTS = 'ADD_NEW_POSTS';


const initialState = {
    posts: [],
    postCount: 0,
    newPostText: ''
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,                                                                                                                               
                newPostText: action.newText
            }
            case ADD_NEW_POST:
                const newPost = state.newPostText
                const posts = (
                    localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : []
                )
                posts.push({ id: state.posts.length + 1, message: newPost, status: false})
                localStorage.setItem('posts', JSON.stringify(posts))
                return {
                    ...state,
                    newPostText: '',
                    posts: [...state.posts, { id: state.posts.length + 1, message: newPost, status: false}],
                    postCount: state.posts.length + 1,
                }
            case ADD_NEW_POSTS:
                return {
                    ...state,
                    posts: action.payload,
                    postCount: action.payload.length
                }
        default: 
            return state
    }
}

export const addNewPostActionCreate = () => ({ type: ADD_NEW_POST })
export const addNewPostsActionCreate = (data) => ({ type: ADD_NEW_POSTS, payload: data })
export const updateNewPostTextActionCreate = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default postsReducer;
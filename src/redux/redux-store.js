import { combineReducers, createStore } from "redux";
import postsReducer from "./posts-reducer";

const reducer = combineReducers({
    postPage: postsReducer,
});

const store = createStore(reducer);

export default store;
import { combineReducers } from 'redux'
import PostCommentReducer from "./PostCommentReducer";

const reducer = combineReducers({
    PostCommentReducer
})

// console.log(reducer.PostCommentReducer[0].by_user);

export default reducer
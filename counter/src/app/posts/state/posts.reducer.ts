import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost, updatePost } from "./posts.actions";


const _postReducer = createReducer(
    initialState,
    on(addPost,(state,action)=>{

        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return{
            ...state,
            posts:[...state.posts, post],
        }
    }),
    on(updatePost, (state,action)=>{
        const updatedPost = state.posts.map((post)=>{
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts:updatedPost,
        }
    })
);

export function postReducer(state, action){
    return _postReducer(state, action);
}
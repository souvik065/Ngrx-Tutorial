import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost } from "./posts.actions";


const _postReducer = createReducer(
    initialState,
    on(addPost,(state,action)=>{

        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return{
            ...state,
            posts:[...state.posts, post],
        }
    })
);

export function postReducer(state, action){
    return _postReducer(state, action);
}
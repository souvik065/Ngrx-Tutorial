import {Post} from './../../models/posts.model'


export interface PostState{
   posts: Post[];
}

export const initialState: PostState = {
    posts:[
        {id:'1',title:'Sample Title 1', description:'Sample Description 1'},
        {id:'1',title:'Sample Title 1', description:'Sample Description 1'}
    ]
}
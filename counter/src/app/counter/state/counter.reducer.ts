import {createReducer, on} from '@ngrx/store';
import { decrement, increment, reset, customIncrement } from './counter.action';
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState, 
    on(increment, (state)=>{
        return {
            ...state,
            counter:state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter:state.counter - 1,
        };
    }), 
    on(reset, (state)=>{
        return {
            ...state,
            counter:0,
        };
    }),
    on(customIncrement, (state, action)=>{
        console.log(action);
        return {
            ...state,
            counter:action.value,
        };
    })

)

export function counterReducer(state, action){

    return _counterReducer(state, action);
}
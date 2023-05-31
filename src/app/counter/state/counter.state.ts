
// Refactoring by creating an Interface CounterState
export interface CounterState{
    counter: number;
}


export const initialState: CounterState = {
    counter: 0
}
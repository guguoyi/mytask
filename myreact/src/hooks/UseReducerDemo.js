import React, {useReducer, useState} from "react";

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
        return {count: state.count + 1};
        case 'decrement':
        return {count: state.count - 1};
        case 'reset':
            return initialState;
        default:
    }
}


function UseReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>UseReducer Demo</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

export default UseReducerDemo;
import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                firstCount: state.firstCount + action.value
            }
        case 'decrement':
            return {
                ...state,
                firstCount: state.firstCount - action.value
            }
        case 'increment2':
            return {
                ...state,
                secondCount: state.secondCount + action.value
            }
        case 'decrement2':
            return {
                ...state,
                secondCount: state.secondCount - action.value
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>firstCount {count.firstCount}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}> decrement</button>
            <br></br>
            <h1>secondCount {count.secondCount}</h1>
            <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>increment5</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}> decrement5</button>
            <br></br>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}


export default CounterTwo

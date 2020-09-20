import React, { useContext } from 'react'
import { countContext } from '../App'

function ComponentF() {
    const CountContext = useContext(countContext)

    return (
        <div>
            ComponentF--{CountContext.countState}
            <button onClick={() => CountContext.countDispatch('increment')}>increment</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => CountContext.countDispatch('reset')}>reset</button>
            <br></br>
            ----------------
        </div>
    )
}
export default ComponentF
import React, { useContext } from 'react'
import { countContext } from '../App'

function ComponentA() {
    const CountContext = useContext(countContext)

    return (
        <div>
            ComponentA--{CountContext.countState}
            <button onClick={() => CountContext.countDispatch('increment')}>increment</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => CountContext.countDispatch('reset')}>reset</button>
            <br></br>
            ----------------
        </div>
    )
}
export default ComponentA
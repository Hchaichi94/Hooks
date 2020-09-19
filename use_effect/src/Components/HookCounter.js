import React, { useState, useEffect } from 'react'


function HookCounter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    //exe every render replace didmount ,didupdate
    useEffect(() => {
        console.log(' useEffect componentDidUpdate')
        document.title = `clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Count Hook {count}</button>
        </div>
    )
}


export default HookCounter

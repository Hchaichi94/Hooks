import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <input type='text'
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h6>your firstName  --{name.firstName} </h6>
            <h6>your lastName  --{name.lastName} </h6>
            {JSON.stringify(name)}
        </form>
    )
}

export default HookCounterThree
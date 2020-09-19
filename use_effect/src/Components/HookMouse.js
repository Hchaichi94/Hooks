import React, { useEffect, useState } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logLousePosition = e => {
        console.log('HookMouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logLousePosition)
        //replace  componentWillUnmount
        return () => {
            console.log('useEffect componentWillUnmount')
            window.removeEventListener('mousemove', logLousePosition)
        }
    }, [])

    return (
        <div>
            hooks x-{x}**** y--{y}
        </div>
    )
}
export default HookMouse
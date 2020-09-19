import React from 'react'
import ComponentE from './ComponentE'



function ComponentC() {
    return (
        <div>
            from --- ComponentC<br></br>
            ******************************
            <ComponentE />
        </div>
    )
}


export default ComponentC
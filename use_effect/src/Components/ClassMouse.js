import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }
    logLousePosition = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.logLousePosition)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logLousePosition)
    }
    
    render() {
        return (
            <div>
                x-{this.state.x} ***** y-{this.state.y}
            </div>
        )
    }
}

export default ClassMouse

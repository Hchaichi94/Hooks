import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {channel => {
                                    return <div>
                                        from --- ComponentF <br></br>
                                    user context value {user}<br></br>
                                    channel context value {channel}<br></br>
                                    </div>
                                }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}


export default ComponentF
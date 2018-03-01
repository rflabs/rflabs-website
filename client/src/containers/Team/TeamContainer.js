import React, {Component} from 'react'

import {Team} from '../../components'
import {TopBarContainer} from '../../containers'

class TeamContainer extends Component { 
    render() {
        return (
            <div className='main'>
                <TopBarContainer />
                <Team />
            </div>
            
        )
    }
}

export default TeamContainer
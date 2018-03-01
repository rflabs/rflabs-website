import React, {Component} from 'react'

import {Team} from '../../components'
import {TopBarContainer, FooterContainer} from '../../containers'

class TeamContainer extends Component { 
    render() {
        return (
            <div className='main'>
                <TopBarContainer />
                <Team />
                <FooterContainer />
            </div>
            
        )
    }
}

export default TeamContainer
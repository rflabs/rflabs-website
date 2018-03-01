
import React, {Component} from 'react'

import {MIT} from '../../components'
import {TopBarContainer, FooterContainer} from '../../containers'

class MITContainer extends Component {
    render() {
        return (
            <div className='main'>
                <TopBarContainer />
                <MIT />
                <FooterContainer />
            </div>
        )
    }
}

export default MITContainer;
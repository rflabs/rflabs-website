import React, {Component} from 'react'

import {Home} from '../../components'
import {TopBarContainer, FooterContainer} from '../../containers';

class HomeContainer extends Component {
    render() {
        return (
            <div className='main'>
                <TopBarContainer />
                <Home />
                <FooterContainer />
            </div>
        )
    }
}

export default HomeContainer
import React, {Component} from 'react'

import {Ayva} from '../../components'

import {TopBarContainer, FooterContainer} from '../../containers'

class AyvaContainer extends Component {
    render() {
        return (
            <div className='main'>
                <TopBarContainer />
                <Ayva />
                <FooterContainer />
            </div>
        )
    }
}

export default AyvaContainer
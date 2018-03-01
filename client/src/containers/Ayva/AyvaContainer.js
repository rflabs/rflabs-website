import React, {Component} from 'react'

import {Ayva} from '../../components'

import {TopBarContainer} from '../../containers'

class AyvaContainer extends Component {
    render() {
        return (
            <div className='main'>
                <TopBarContainer />
                <Ayva />
            </div>
        )
    }
}

export default AyvaContainer
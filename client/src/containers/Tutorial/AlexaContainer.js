
import React, {Component} from 'react'

import {Alexa} from '../../components'
import {TopBarContainer} from '../../containers'

class AlexaContainer extends Component {
    render() {
        return (
            <div className='ayvaMain'>
                <TopBarContainer />
                <Alexa />
            </div>
        )
    }
}

export default AlexaContainer
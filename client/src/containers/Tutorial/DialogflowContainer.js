
import React, {Component} from 'react'

import {Dialogflow} from '../../components'
import {TopBarContainer} from '../../containers'

class DialogflowContainer extends Component {
    render() {
        return (
            <div className='ayvaMain'>
                <TopBarContainer />
                <Dialogflow />
            </div>
        )
    }
}

export default DialogflowContainer
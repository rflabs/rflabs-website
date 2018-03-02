
import React, {Component} from 'react'

import {Tutorial} from '../../components'
import {TopBarContainer} from '../../containers'

class TutorialContainer extends Component {
    render() {
        return (
            <div className='ayvaMain'>
                <TopBarContainer />
                <Tutorial />
            </div>
        )
    }
}

export default TutorialContainer
import React, {Component} from 'react'

import {Home} from '../../components'
import {TopBarContainer} from '../../containers';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <TopBarContainer />
                <Home />
            </div>
        )
    }
}

export default HomeContainer
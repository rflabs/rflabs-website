
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './topBar.css'

class TopBar extends Component {
    render() {
        return (
            <div className="topBar">
                <div className="topBarContainer">
                    <div className='leftContainer'>
                        <div className='logo'>
                   
                            <span>Refresh Trivia</span>
                        </div>
                    </div>
                    <div className='rightContainer'>
                        {this.props.loadingStatus !== 'INIT'
                            ? <div className='goToMain'>
                                <div className='spokenBoxTop'>
                                   
                                </div>
                                <div className='spokenTextTop'>
                                    <span>Go to main menu</span>
                                </div>
                            </div>
                            : null
                        }
                        <div className='home'>
                            <NavLink to='/'><span>Trivia</span></NavLink>
                        </div>
                        <div className='home'>
                            <NavLink to='/help'><span>Help</span></NavLink>
                        </div>
                        <div className='about'>
                            <NavLink to='/about'><span>About</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar;
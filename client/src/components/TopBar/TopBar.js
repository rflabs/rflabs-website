
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './topBar.css'

import logo from '../../img/rflabs-logo.png'

class TopBar extends Component {
    render() {
        return (
            <div className="topBar">
                <div className="topBarContainer">
                    <div className='leftContainer'>
                        <div className='logo'>
                            <img className='rflabs-logo' src={logo} alt='rflabs-logo'/>
                        </div>
                    </div>
                    <div className='rightContainer'>
                        <div className='home'>
                            <NavLink to='/ayva'><span>Ayva</span></NavLink>
                        </div>
                        <div className='home'>
                            <NavLink to='/documentation'><span>Docs</span></NavLink>
                        </div>
                        <div className='home'>
                            <NavLink to='/github'><span>Github</span></NavLink>
                        </div>
                        <div className='about'>
                            <NavLink to='/team'><span>Team</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar;
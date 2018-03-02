
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './topBar.css'

import logo from '../../img/rflabs-logo-website.png'

class TopBar extends Component {
    render() {
        return (
            <div className="topBar">
                <div className="topBarContainer">
                    <div className='leftContainer'>
                        <div className='logo'>
                            <NavLink to='/'><img className='rflabs-logo-website' src={logo} alt='rflabs-logo-website'/></NavLink>
                        </div>
                    </div>
                    <div className='rightContainer'>
                        <div className='links'>
                            <NavLink to='/ayva'><span>Ayva</span></NavLink>
                        </div>
                        <div className='links'>
                            <NavLink to='/tutorial'><span>Tutorial</span></NavLink>
                        </div>
                        <div className='links'>
                            <a href="https://rflabs.github.io/ayva-documentation/">Docs</a>
                        </div>
                        <div className='links'>
                            <a href="https://github.com/rflabs/ayva">Github</a>
                        </div>
                        <div className='team'>
                            <NavLink to='/team'><span>Team</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar;
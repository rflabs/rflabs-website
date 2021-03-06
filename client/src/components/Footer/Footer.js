
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './footer.css'

import github from '../../img/github.png' 

class Footer extends Component {
    render() {
        return (
            <div className='footerContainer'>
                <div className='footerLeft'>
                    <div className='copyrightBox'>
                        <span>&copy; 2018 Refresh Labs</span>
                    </div>
                    
                    <div className='githubBox'>
                        <a href='https://github.com/rflabs'>
                        <img className='github' src={github} alt='github'/>
                        </a>
                    </div>
                </div>
                <div className='footerRight'>
                    <div className='licenseBox'>
                        <span>Ayva Framework is licensed under <NavLink to='/mit'>MIT</NavLink>.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
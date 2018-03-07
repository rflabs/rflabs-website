
import React, {Component} from 'react'

import {Headshot} from '../../components'

import './team.css'

import kevin from './img/kevin.png'
import gavin from './img/gavin.png'
import linkedin from './img/linkedin.png'

class Team extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <div className='mainOne'>
                    <div className='teamBox'>
                        <Headshot 
                            linkedin = {linkedin}
                            individual={kevin}
                            bioTitle='Co-founder, CEO'
                            bioName='Kevin Lee'
                            linkedInURL='https://www.linkedin.com/in/lynkr/'
                        />
                        <Headshot 
                            linkedin = {linkedin}
                            individual={gavin}
                            bioTitle='Co-founder, CTO'
                            bioName='Gavin Berokwitz'
                            linkedInURL='https://www.linkedin.com/in/gavin-berkowitz-aa685223/'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;
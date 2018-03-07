
import React, {Component} from 'react'

import './tutorial.css'

import {StepOne,
        StepTwo,
        StepThree,
        StepFour,
        StepFive,
        StepSix,
        StepSeven,
        Contents} from '../../components'

import terminal from './img/terminal.png'
import npm from './img/npm.png'
import githubBlack from './img/github-black.png'

class Tutorial extends Component {
    render() {
        return (
            <div className='ayvaBox'>
                <div className='contentsBox'>
                    <Contents />
                </div>
                <div className='helloAyva'>
                    <div className='helloAyvaDescription'>
                        <h1>Hello Ayva.</h1>
                        <span>A tutorial of how to use Ayva to create and deploy a voice application on your local voice 
                        assistant device.</span>
                        <a name='stepOne'></a>
                    </div>
                    <StepOne terminal={terminal} npm={npm} githubBlack={githubBlack} />
                    <StepTwo terminal={terminal} npm={npm} githubBlack={githubBlack} />
                    <StepThree />
                    <StepFour terminal={terminal} />
                    <StepFive terminal={terminal} />
                    <StepSix terminal={terminal}/>
                    <StepSeven />
                </div>
            </div>
        )
    }
}

export default Tutorial
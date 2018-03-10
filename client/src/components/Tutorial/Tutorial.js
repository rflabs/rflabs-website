
import React, {Component} from 'react'

import './tutorial.css'

import {StepOne,
        StepTwo,
        StepThree,
        StepFour,
        StepFive,
        StepSix,
        StepSeven,
        StepEight,
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
                        <span className='helloAyvaDescriptionText'>A simple tutorial of how to use Ayva to create a voice 
                        application on your local device.</span>
                        <a id='stepOne'><span className='hidden'>stepOne</span></a>
                    </div>
                    <StepOne terminal={terminal} npm={npm} githubBlack={githubBlack} />
                    <StepTwo terminal={terminal} npm={npm} githubBlack={githubBlack} />
                    <StepThree />
                    <StepFour terminal={terminal} />
                    <StepFive terminal={terminal} />
                    <StepSix terminal={terminal}/>
                    <StepSeven />
                    <StepEight />
                </div>
            </div>
        )
    }
}

export default Tutorial
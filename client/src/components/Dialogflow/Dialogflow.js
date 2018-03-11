
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
        DialogflowInstructions} from '../../components'

import terminal from '../../img/terminal.png'
import npm from './img/npm.png'
import githubBlack from './img/github-black.png'

class Dialogflow extends Component {
    render() {
        return (
            <div className='ayvaBox'>
                <div className='contentsBox'>
                    <DialogflowInstructions />
                </div>
                <div className='helloAyva'>
                    <div className='helloAyvaDescription'>
                        <h1>Introduce Ayva to Google.</h1>
                        <span className='helloAyvaDescriptionText'>A simple tutorial of how to use Ayva to create a voice 
                        application on your Google Home or any Android mobile device (i.e <a href='https://assistant.google.com/' className='linkHighlight'>Google Assistant</a>).</span>
                        <a id='stepOne'><span className='hidden'>stepOne</span></a>
                    </div>
                    <StepOne terminal={terminal} npm={npm} githubBlack={githubBlack} />
                    <StepTwo terminal={terminal} />
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

export default Dialogflow
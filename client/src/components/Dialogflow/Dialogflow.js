
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

import npm from './img/npm.png'
import githubBlack from './img/github-black.png'

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset:-100})

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
                        <div key={'stepOne'}></div>
                    </div>
                    <ScrollableAnchor id={'stepOne'} >
                        <StepOne npm={npm} githubBlack={githubBlack} />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepTwo'} >
                        <StepTwo />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepThree'} >
                        <StepThree />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepFour'} >
                        <StepFour  />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepFive'} >
                        <StepFive  />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepSix'} >
                        <StepSix />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepSeven'} >
                        <StepSeven />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepEight'} >
                        <StepEight />
                    </ScrollableAnchor>
                </div>
            </div>
        )
    }
}

export default Dialogflow
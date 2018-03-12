
import React, {Component} from 'react'

import {AlexaInstructions,
        StepNine,
        StepTen,
        StepEleven,
        StepTwelve,
        StepThirteen} from '../../components'

import terminal from '../../img/terminal.png'

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset:-100})

class Alexa extends Component {
    render() {
        return (
            <div className='ayvaBox'>
                <div className='contentsBox'>
                    <AlexaInstructions />
                </div>
                <div className='helloAyva'>
                    <div className='helloAyvaDescription'>
                        <h1>Introduce Ayva to Alexa.</h1>
                        <span className='helloAyvaDescriptionText'>This is part 2 of the Hello Ayva tutorial. We will walk you through how to add Alexa to your existing Hello Ayva app.</span>
                        <br />
                        <div key={'stepNine'} />
                    </div>
                    <ScrollableAnchor id={'stepNine'}>
                        <StepNine />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepTen'}>
                        <StepTen terminal={terminal} />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepEleven'}>
                        <StepEleven terminal={terminal} />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepTwelve'}>
                        <StepTwelve terminal={terminal} />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'stepThirteen'}>
                        <StepThirteen />
                    </ScrollableAnchor>
                </div>
            </div>
        )
    }
}

export default Alexa
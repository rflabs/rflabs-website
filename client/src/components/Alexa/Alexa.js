
import React, {Component} from 'react'

import {AlexaInstructions,
        StepNine,
        StepTen,
        StepEleven,
        StepTwelve,
        StepThirteen} from '../../components'

import terminal from '../../img/terminal.png'

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
                        <a id='stepNine'><span className='hidden'>stepNine</span></a>
                    </div>
                    <StepNine />
                    <StepTen terminal={terminal} />
                    <StepEleven terminal={terminal} />
                    <StepTwelve terminal={terminal} />
                    <StepThirteen />
                </div>
            </div>
        )
    }
}

export default Alexa
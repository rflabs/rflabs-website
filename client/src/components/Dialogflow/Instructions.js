
import React, {Component} from 'react'

import './contents.css'

class Instructions extends Component {
    render() {
        return (
            <div className='tableOfContents'>
                <h3>Instructions</h3>
                <ol className='contentList'>
                    <li><a href='#stepOne'>Install Avyva CLI</a></li>
                    <li><a href='#stepTwo'>Install Bespoken Tools for local proxy</a></li>
                    <li><a href='#stepThree'>Create Dialogflow developer account & agent</a></li>
                    <li><a href='#stepFour'>Bespoken local proxy & webhook setup</a></li>
                    <li><a href='#stepFive'>Ayva hello</a></li>
                    <li><a href='#stepSix'>Ayva deploy</a></li>
                    <li><a href='#stepSeven'>Test on Google Assistant</a></li>
                    <li><a href='#stepEight'>Next steps (adding Alexa)</a></li>
                </ol>
            </div>
        )
    }
}

export default Instructions


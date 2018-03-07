
import React, {Component} from 'react'

import './contents.css'

class Contents extends Component {
    render() {
        return (
            <div className='tableOfContents'>
                <h3>Contents</h3>
                <ol className='contentList'>
                    <a href='#stepOne'><li>Install Avyva CLI</li></a>
                    <a href='#stepTwo'><li>Install Bespoken Tools for local proxy</li></a>
                    <a href='#stepThree'><li>Create Dialogflow developer account & agent</li></a>
                    <a href='#stepFour'><li>Bespoken local proxy & webhook setup</li></a>
                    <a href='#stepFive'><li>Ayva hello</li></a>
                    <a href='#stepSix'><li>Ayva deploy</li></a>
                    <a href='#stepSeven'><li>Test on Google Assistant</li></a>
                </ol>
            </div>
        )
    }
}

export default Contents


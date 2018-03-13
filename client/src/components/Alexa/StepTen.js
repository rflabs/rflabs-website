import React, {Component} from 'react'

import {Terminal} from '../../components'

import askCLIOne from './img/askCLIOne.png'
import askCLITwo from './img/askCLITwo.png'
import askCLIThree from './img/askCLIThree.png'

class StepTen extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 10. </span>Install Amazon Ask CLI</span>
                </div>
                <div className='stepDescriptionBox'>
                    <div className='tutorialBox'>
                        <h3>10a. Install Amazon Ask CLI NPM package.</h3>
                        <Terminal code='npm install -g ask-cli' />
                        <span>Use your command line tool to install Amazon's Ask CLI. We will be using this tool to import Hello Ayva's interaction model to your Alexa skill. </span>
                    </div>
                    <div className='tutorialBox'>
                        <h3>10b. Link Amazon developer account with Amazon Ask CLI.</h3>
                        <Terminal code='ask init' />
                        <span>Initialize the CLI with your Amazon developer account credentials by first calling <span className='code'>ask init</span> in your command line tool.</span>
                        <img className='screenshotImg' src={askCLIOne} alt='askCLIOne' />
                        <img className='screenshotImg' src={askCLITwo} alt='askCLITwo' />
                        <img className='screenshotImg' src={askCLIThree} alt='askCLIThree' />
                        <span> If all is successful, you should receive a vender ID and a message that says your profile was initialized successfully in your command line tool.</span> 
                    </div>
                    <div key={'stepEleven'} />
                </div>
            </div>
        )
    }
}

export default StepTen
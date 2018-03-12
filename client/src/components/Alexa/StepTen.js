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
                <br />
                <div className='stepDescriptionBox'>
                    <Terminal code='npm install -g ask-cli' />
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>10a. Install Amazon Ask CLI NPM package.</h3>
                        <span>Use your command line tool to install Amazon's Ask CLI. We will be using this tool to import Hello Ayva's interaction model to your Alexa skill. </span>
                        <br />
                    </div>
                    <br />
                    <Terminal code='ask init' />
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>10b. Link Amazon developer account with Amazon Ask CLI.</h3>
                        <span>Initialize the CLI with your Amazon developer account credentials by first calling <span className='code'>ask init</span> in your command line tool.</span>
                        <br />
                        <img className='cmdLineImg' src={askCLIOne} alt='askCLIOne' />
                        <br />
                        <img className='cmdLineImg' src={askCLITwo} alt='askCLITwo' />
                        <br />
                        <img className='threeImg' src={askCLIThree} alt='askCLIThree' />
                        <br />
                        <span> If all is successful, you should receive a vender ID and a message that says your profile was initialized successfully in your command line tool.</span> 
                    </div>
                    <div key={'stepEleven'} />
                </div>
            </div>
        )
    }
}

export default StepTen
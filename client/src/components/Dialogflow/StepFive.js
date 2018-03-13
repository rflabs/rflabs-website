import React, {Component} from 'react'

import {Terminal} from '../../components'

import helloOne from './img/helloOne.png'
import helloTwo from './img/helloTwo.png'

class StepFive extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 5. </span>Ayva hello</span>
                </div>
                <div className='stepDescriptionBox'>
                    <div className='tutorialBox'>
                        <h3>5a. Run command in the local directory you'd like the <span className='ayvaHighlight'>Hello Ayva</span> project files to be created in.</h3>
                        <Terminal code='ayva hello' />
                        <span>This command will git clone Refresh Lab's <span className='ayvaHighlight'>Hello Ayva</span> project to into directory the command is run in. This 
                        project includes a pre-configured interaction model ready to be deployed to your Dialogflow agent.</span>
                        <img className='screenshotImg' src={helloOne} alt='threeA'/>
                    </div>
                    <br />
                    <div className='tutorialBox'>
                        <h3>5b. Select 'Google (Dialogflow)' and enter the agent developer access token <a href='#stepThree' className='stepHighlight'>(Step 3d)</a>.</h3>
                        <img className='screenshotImg' src={helloTwo} alt='threeA'/>
                        <span>This provides <span className='ayvaHighlight'>Ayva</span> with the necessary data to authenticate with the desired Dialogflow agent. The developer access 
                        token you define here can always be found and modified in <span className='ayvaHighlight'>ayva.json</span>.</span>
                        <span className='footNote'>(Always located in the root of your voice project folder)</span>
                    </div>
                    <div key={'stepSix'} />
                </div>
            </div>
        )
    }
}

export default StepFive
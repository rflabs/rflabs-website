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
                    <br />
                    <Terminal code='ayva hello' />
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>5a. Run command in the local directory you'd like the <span className='ayvaHighlight'>Hello Ayva</span> project files to be created in.</h3>
                        <span>This command will git clone Refresh Lab's <span className='ayvaHighlight'>Hello Ayva</span> project to into directory the command is run in. This 
                        project includes a pre-configured interaction model ready to be deployed to your Dialogflow agent.</span>
                        <br />
                        <img className='cmdLineImg' src={helloOne} alt='threeA'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>5b. Select 'Google (Dialogflow)' and enter the agent developer access token <a href='#stepThree' className='stepHighlight'>(Step 3d)</a>.</h3>
                        <span>This helps <span className='ayvaHighlight'>Ayva</span> understand and authenticate to the desired Dialogflow agent. The developer access 
                        token you define here can be found in <span className='ayvaHighlight'>ayva.json</span>, always located in the root of your project folder.</span>
                        <br />
                        <img className='cmdLineImg' src={helloTwo} alt='threeA'/>
                    </div>
                    <div key={'stepSix'} />
                </div>
            </div>
        )
    }
}

export default StepFive
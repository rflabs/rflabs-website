
import React, {Component} from 'react'

import threeA from './img/threeA.png'
import threeB from './img/threeB.png'
import threeC from './img/threeC.png'
import threeD from './img/threeD.png'
import threeE from './img/threeE.png'

class StepThree extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 3. </span>Create a Dialogflow developer account & new agent</span>
                </div>
                <div className='stepDescriptionBox'>
                    <div className='tutorialBox'>
                        <h3>3a. <a href='https://console.dialogflow.com/api-client/#/login' className='linkHighlight'>Sign in to Dialogflow with Google</a></h3>
                        <img className='screenshotImg' src={threeA} alt='threeA'/>
                        <span>In order to create a new voice app on
                            <a href='https://assistant.google.com/' className='linkHighlight'> Google Assistant</a>, we will first need to 
                            create a <a href='' className='linkHighlight'>Dialogflow</a> account to create a new skill.</span>                      
                    </div>
                    <div className='tutorialBox'>
                        <h3>3b. Click on 'Create Agent' tab</h3>   
                        <img className='screenshotImg' src={threeB} alt='threeB'/>
                        <span>Go to the <a href='https://console.dialogflow.com/api-client/#/newAgent' className='linkHighlight'>Create Agent</a> tab to name and create a new agent.</span>
                    </div>
                    <div className='tutorialBox'>
                        <h3>3c. Enter 'hello-ayva' for the agent name and click 'Create'</h3>
                        <img className='screenshotImg' src={threeC} alt='threeC'/>
                        <span>Create a new agent called 'hello-ayva'. This will be the agent we will later be 
                        uploading our voice app's interaction model to.</span>
                    </div>
                    <div className='tutorialBox'>
                        <h3>3d. Go to agent configuration to acquire developer access token under 'General'.</h3>
                        <img className='screenshotImg' src={threeD} alt='threeC'/>
                        <img className='screenshotImg' src={threeE} alt='threeE'/>
                        <span>Now that we've successfully created a new agent, we need to grab the <a href='https://dialogflow.com/docs/reference/agent/' className='linkHighlight'>developer access token</a>. 
                        This token is unique to every agent. This is how <span className='ayvaHighlight'>Ayva</span> knows which <a href='https://console.dialogflow.com/api-client/#/agent/' className='linkHighlight'>Dialogflow agent</a> to upload your 
                        app's interaction model to.</span>
                    </div>
                    <span className='footNote'>(Ayva currently uses <a href='https://dialogflow.com/docs/reference/agent/' className='linkHighlight'>Dialogflow V1 API</a>)</span>
                    <div key={'stepFour'} />
                </div>
            </div>
        )
    }
}

export default StepThree
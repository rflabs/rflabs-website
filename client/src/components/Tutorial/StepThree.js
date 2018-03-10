
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
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>3a. <a href='https://console.dialogflow.com/api-client/authorize_url_google/nopopup' className='linkHighlight'>Sign in to Dialogflow with Google</a></h3>
                        <span>In order to create a new voice app on
                            <a href='https://assistant.google.com/' className='linkHighlight'> Google Assistant</a>, we will first need to 
                            create a <a href='' className='linkHighlight'>Dialogflow</a> account to create a new skill.</span>
                        <br />
                        <img className='threeImg' src={threeA} alt='threeA'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>3b. Click on 'Create Agent' tab</h3>   
                        <span>Go to the <a href='https://console.dialogflow.com/api-client/#/newAgent' className='linkHighlight'>Create Agent</a> tab to name and create a new agent.</span>
                        <br />
                        <img className='threeImg' src={threeB} alt='threeB'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>3c. Enter 'hello-ayva' for the agent name and click 'Create'</h3>
                        <span>Create a new agent called 'hello-ayva'. This will be the agent we will later be 
                        uploading our voice app's interaction model to.</span>   
                        <br />
                        <img className='threeImg' src={threeC} alt='threeC'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>3d. Go to agent configuration to acquire developer access token under 'General'.</h3>
                        <span>Now that we've successfully created a new agent, we need to grab the <a href='https://dialogflow.com/docs/reference/agent/' className='linkHighlight'>developer access token</a>. 
                        This token is unique to every agent. This is how <span className='ayvaHighlight'>Ayva</span> knows which <a href='https://console.dialogflow.com/api-client/#/agent/' className='linkHighlight'>Dialogflow agent</a> to upload your 
                        voice app's interaction model to.</span>
                        <br />
                        <img className='threeImg' src={threeD} alt='threeC'/>
                        <br />
                        <img className='threeImg' src={threeE} alt='threeE'/>
                    </div>
                    <br />
                    
                    <span>Ayva currently uses <a href='https://dialogflow.com/docs/reference/agent/' className='linkHighlight'>Dialogflow V1 API</a>. In order to utilize Ayva deploy, you will need 
                        your Dialogflow Developer access token. Ayva will use this to
                        import your voice application's interaction model to Dialogflow.</span>
                    <a id='stepFour'><span className='hidden'>stepFour</span></a>
                </div>
            </div>
        )
    }
}

export default StepThree
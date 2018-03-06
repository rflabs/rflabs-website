
import React, {Component} from 'react'

import checkIntents from './img/checkIntents.png'
import integrationSettings from './img/integrationSettings.png'
import gAssistantSetup from './img/gAssistantSetup.png'

class StepSeven extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 7. </span>Test on Google Assistant</span>
                </div>
                <br />
                <div className='stepDescriptionBox'>
                    <div className='tutorialImgBox'>
                        <h3>a. Ensure intents have been successfully imported</h3>
                        <span>In Dialogflow, click on the 'Intents' tab to see all intents defined for your agent. 
                        Ayva Hello creates 5 intents (Born, EnableBorn, Name, and Welcome).</span>
                        <br />
                        <img className='threeImg' src={checkIntents} alt='checkIntents'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>b. Configure Google Assistant integration</h3>
                        <span>In Dialogflow, cick on the 'Integrations' tab. On the top of the page you will see a link called 
                        'Integration Settings' under the Google Assistant Integrations panel. This is how we will configure the 
                        welcome intent with Google Assistant.</span>
                        <br />
                        <img className='threeImg' src={integrationSettings} alt='integrationSettings'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>c. Set the explicit invocation intent , enable auto-preview changes, and test.</h3>
                        <span>In Dialogflow, cick on the 'Integrations' tab. On the top of the page you will see a link called 
                        'Integration Settings' under the Google Assistant Integrations panel. This is how we will configure 
                        the welcome intent with Google Assistant.</span>
                        <br />
                        <img className='threeImg' src={gAssistantSetup} alt='gAssistantSetup'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>d. Talk to my test app</h3>
                        <span>You should now be in the 'Actions on Google' simulator page. Go ahead and input 'Talk to my test app' into 
                        the chat simulator to begin Ayva Hello!</span>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default StepSeven
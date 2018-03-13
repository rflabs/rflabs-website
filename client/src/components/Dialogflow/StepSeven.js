
import React, {Component} from 'react'

import checkIntents from './img/checkIntents.png'
import integrationSettings from './img/integrationSettings.png'
import gAssistantSetup from './img/gAssistantSetup.png'
import googleSimulator from './img/googleSimulator.png'

class StepSeven extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 7. </span>Test on Google Assistant</span>
                </div>
                <div className='stepDescriptionBox'>
                    <div className='tutorialBox'>
                        <h3>7a. Confirm intents have been successfully imported</h3>
                        <img className='screenshotImg' src={checkIntents} alt='checkIntents'/>
                        <span>In Dialogflow, click on the 'Intents' tab to see all intents defined for your agent. 
                        <span className='ayvaHighlight'> Hello Ayva</span> creates 5 intents.</span>
                        <span className='footNote'>(i.e Born, EnableBorn, Name, and Welcome)</span>
                    </div>
                    <div className='tutorialBox'>
                        <h3>7b. Confirm Bespoken proxy and voice app services are running</h3>
                        <span>
                            In order to see your locally hosted <span className='ayvaHighlight'>Hello Ayva </span> 
                            app in action, ensure both the Bespoken tool proxy service
                            <a href='#stepFour' className='stepHighlight'> (Step 4a)</a> and the voice app service
                            <a href='#stepSix' className='stepHighlight'> (Step 6b)</a> are active.</span>
                    </div>
                    <div className='tutorialBox'>
                        <h3>7c. Configure Google Assistant integration</h3>
                        <img className='screenshotImg' src={integrationSettings} alt='integrationSettings'/>
                        <span>In Dialogflow, click on the <a href='https://console.dialogflow.com/api-client/#/agent//integrations' className='linkHighlight'>Integrations</a> tab. On the top of the page you will see a link called 
                        'Integration Settings' under the Google Assistant Integrations panel. This is how we will configure the 
                        welcome intent with Google Assistant.</span>   
                    </div>
                    <div className='tutorialBox'>
                        <h3>7d. Set the explicit invocation intent , enable auto-preview changes, and test.</h3>
                        <img className='screenshotImg' src={gAssistantSetup} alt='gAssistantSetup'/>
                        <span>First, change the explicit invocation to 'Welcome'. Then click on the button to enable 'Auto-preview changes'. Finally, click 'Test' to deploy agent to Google Assistant.</span>
                    </div>
                    <div className='tutorialBox'>
                        <h3>7e. Talk to my test app</h3>
                        <img className='screenshotImg' src={googleSimulator} alt='googleSimulator'/>
                        <span>Now try talking to your local version of <span className='ayvaHighlight'>Hello Ayva</span> by saying <span className='speechHighlight'>"talk to my test app"</span> through any Google Assistant enabled device. <span className='footNote'>(Google Home or any Android mobile device)</span></span>
                    </div>
                    <div key={'stepEight'}></div>
                </div>
            </div>
        )
    }
}

export default StepSeven
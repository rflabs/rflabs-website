
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
                <br />
                <div className='stepDescriptionBox'>
                    <div className='tutorialImgBox'>
                        <h3>7a. Confirm intents have been successfully imported</h3>
                        <span>In Dialogflow, click on the 'Intents' tab to see all intents defined for your agent. 
                        <span className='ayvaHighlight'> Hello Ayva</span> creates 5 intents.</span>
                        <span className='footNote'>(Born, EnableBorn, Name, and Welcome)</span>
                        <br />
                        <img className='threeImg' src={checkIntents} alt='checkIntents'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>7b. Confirm Bespoken proxy and voice app services are running</h3>
                        <span>
                            In order to see your locally hosted <span className='ayvaHighlight'>Hello Ayva </span> 
                            app in action, ensure both the Bespoken tool proxy service
                            <a href='#stepFour' className='stepHighlight'> (Step 4a)</a> and the voice app service
                            <a href='#stepSix' className='stepHighlight'> (Step 6b)</a> are active.</span>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>7c. Configure Google Assistant integration</h3>
                        <span>In Dialogflow, click on the <a href='https://console.dialogflow.com/api-client/#/agent//integrations' className='linkHighlight'>Integrations</a> tab. On the top of the page you will see a link called 
                        'Integration Settings' under the Google Assistant Integrations panel. This is how we will configure the 
                        welcome intent with Google Assistant.</span>
                        <br />
                        <img className='threeImg' src={integrationSettings} alt='integrationSettings'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>7d. Set the explicit invocation intent , enable auto-preview changes, and test.</h3>
                        <span>First, change the explicit invocation to 'Welcome'. Then click on the button to enable 'Auto-preview changes'. Finally, click 'Test' to deploy agent to Google Assistant.</span>
                        <br />
                        <img className='threeImg' src={gAssistantSetup} alt='gAssistantSetup'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>7e. Talk to my test app</h3>
                        <span>Now try talking to your local version of <span className='ayvaHighlight'>Hello Ayva</span> by saying <span className='speechHighlight'>"talk to my test app"</span> through any Google Assistant enabled device.</span>
                        <span className='footNote'>(Google Home or any Android mobile device)</span>
                        <br />
                        <img className='threeImg' src={googleSimulator} alt='googleSimulator'/>
                    </div>
                    <div key={'stepEight'}></div>
                </div>
            </div>
        )
    }
}

export default StepSeven

import React, {Component} from 'react'

import {Terminal} from '../../components'

import bstProxy from './img/bstProxy.png'
import dfFulfillment from './img/dfFulfillment.png'

class StepFour extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 4. </span>Bespoken local proxy & webhook setup</span>
                </div>
                <div className='stepDescriptionBox'>
                    <div className='tutorialBox'>
                        <h3>4a. Run command to start a proxy service hosted by <a href='https://bespoken.io/bst/' className='linkHighlight'>Bespoken Tools</a>.</h3>
                        <Terminal code='bst proxy http 8080 --verbose' />
                        <span> This creates a public URL for accessing the local service you will be starting for <span className='ayvaHighlight'>Hello Ayva</span>.</span>
                        <span className='footNote'>(Hello Ayva runs on port 8080 by default)</span>
                        <img className='screenshotImg' src={bstProxy} alt='bstProxy'/>
                    </div>
                    <br />
                    <div className='tutorialBox'>
                        <h3>4b. Configure your agent's webhook to your Bespoken public url followed by '/gAssistant'.</h3>
                        <img className='screenshotImg' src={dfFulfillment} alt='dfFulfillment'/>
                        <span>Navigate to the 
                            <a href='https://console.dialogflow.com/api-client/#/agent//fulfillment' className='linkHighlight'> Fullfillment </a> 
                            tab in Dialogflow. Enable the webhook service and enter your Bespoken Tool's public URL followed by 
                            '/gAssistant'. Scroll to the bottom of the page and click the Save button.</span><br />
                        <span className='footNote'>(DON'T FORGET TO CLICK THE SAVE BUTTON!)</span>
                    </div>
                    <div key={'stepFive'} />
                </div>
            </div>
        )
    }
}

export default StepFour
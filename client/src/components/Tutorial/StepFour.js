
import React, {Component} from 'react'

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
                <br />
                    <span className='terminalDescription'>
                        <img className='terminal' src={this.props.terminal} alt='terminal'/>
                        <span className='code'>bst proxy http 8080 --verbose</span>
                    </span>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>a. Run command to start a proxy service hosted by <a href='https://bespoken.io'>Bespoken</a>.</h3>
                        <span> This will create a public URL 
                        for accessing the local service you will be running later in the tutorial for the Hello Ayva voice app 
                        (runs on port 8080 by default).</span>
                        <br />
                        <img className='cmdLineImg' src={bstProxy} alt='bstProxy'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>b. Configure your agent's webhook to your Bespoken public url followed by '/gAssistant'.</h3>
                        <span>Navigate to the 'Fullfillment' tab in Dialogflow. Enable the 'Webhook' service and enter your 
                        Bespoken public URL followed by '/gAssistant' (this defines what data structure Ayva what will to use for responses).</span>
                        <br />
                        <img className='threeImg' src={dfFulfillment} alt='dfFulfillment'/>
                        <span>DON'T FORGET TO CLICK THE SAVE BUTTON AT THE BOTTOM OF THE PAGE</span>
                    </div>
                    <br />
                    <span className='footNote'><a href='https://ngrok.com/'>(Ngrok</a> or similar can be used in place of <a href='https://bespoken.io'>Bespoken)</a>.</span>
                    <a name='stepFive'></a>
                </div>
            </div>
        )
    }
}

export default StepFour
import React, {Component} from 'react'

import stepNineA from './img/stepNineA.png'
import stepNineB from './img/stepNineB.png'
import stepNineC from './img/stepNineC.png'
import stepNineD from './img/stepNineD.png'
import stepNineE from './img/stepNineE.png'
import stepNineE2 from './img/stepNineE2.png'

class StepNine extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 9. </span>Create Alexa developer account & new skill</span>
                </div>
                <br />
                <div className='stepDescriptionBox'>
                    <div className='tutorialImgBox'>
                        <h3>9a. Sign into Alexa Skills Kit.</h3>
                        <span>After you have successfully created a Amazon developer account, find 'Your Alexa Console' on the top navbar. Hover over this and select 'Skills (new console)'.</span>
                        <br />
                        <img className='threeImg' src={stepNineA} alt='stepNineA' />
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>9b. Create a new skill.</h3>
                        <span>Click on the 'Create Skill' button to begin creating a new Alexa skill.</span>
                        <br />
                        <img className='threeImg' src={stepNineB} alt='stepNineB' />
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>9c. Name your new skill 'hello-ayva'.</h3>
                        <span>Enter 'hello-ayva' as the name of your new skill. Click the 'Next' button when you are ready.</span>
                        <br />
                        <img className='threeImg' src={stepNineC} alt='stepNineC' />
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>9d. Select 'Custom' as your skill model.</h3>
                        <span>For Hello Ayva, select 'Custom as your skill model. Click the 'Create skill' button when you are ready.</span>
                        <br />
                        <img className='threeImg' src={stepNineD} alt='stepNineD' />
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>9e. Acquire Alexa skill ID.</h3>
                        <span>Find 'Your Alexa Console' at the top of the navbar. Click on 'Skills (new console)' to return 
                        the Skills page. Here you will see the new skill 'hello-ayva'. Click on 'View Skill ID' to see your 
                        skill ID. </span>
                        <span className='footNote'>(You will need this in the next step when setting up the Alexa Ask CLI)</span>
                        <br />
                        <img className='threeImg' src={stepNineE} alt='stepNineE' />
                        <br />
                        <img className='threeImg' src={stepNineE2} alt='stepNineE2' />
                    </div>
                </div>
            </div>
        )
    }
}

export default StepNine
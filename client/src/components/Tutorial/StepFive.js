
import React, {Component} from 'react'

import helloOne from './img/helloOne.png'
import helloTwo from './img/helloTwo.png'

class StepFive extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span><span className='stepTitle'>Step 5. </span>Ayva hello</span>
                </div>
                <div className='stepDescriptionBox'>
                    <br />
                    <span className='terminalDescription'>
                        <img className='terminal' src={this.props.terminal} alt='terminal'/>
                        <span className='code'>ayva hello</span>
                    </span>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>a. Run command in the local directory you'd like the 'hello ayva' project files to be created in.</h3>
                        <span>This command will git clone Refresh Lab's Ayva Hello project to into directory the command is run in. This 
                        project includes a pre-configured interaction model ready to be deployed to your Dialogflow agent.</span>
                        <br />
                        <img className='cmdLineImg' src={helloOne} alt='threeA'/>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>b. Select 'Google (Dialogflow)' and enter the agent developer access token (obtained in step 3).</h3>
                        <span>This helps Ayva understand and authenticate to the desired Dialogflow agent. The developer access 
                        token you define here can be found in 'ayva.json'  in the newly created 'ayva-hello' project folder.</span>
                        <br />
                        <img className='cmdLineImg' src={helloTwo} alt='threeA'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepFive
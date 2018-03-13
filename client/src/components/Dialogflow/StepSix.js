import React, {Component} from 'react'

import {Terminal} from '../../components'

class StepSix extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 6. </span>Ayva deploy & npm start</span>
                </div>
                <div className='stepDescriptionBox'>
                    <div className='tutorialBox'>
                        <h3>6a. Import interaction model to Dialogflow agent</h3>
                        <Terminal code='ayva deploy' />
                        <span>
                            Navigate into the the project directory, <span className='ayvaHighlight'>hello-ayva </span>
                            <a href='#stepFive' className='stepHighlight'>(created in step 5)</a>, and run
                            <span className='code'> ayva deploy</span>. This will push the pre-defined interaction model 
                            in this voice application to the Dialogflow agent <a href='#stepThree' className='stepHighlight'>(created in Step 3)</a>.</span>
                    </div>
                    <div className='tutorialBox'>
                        <h3>6b. Run Hello Ayva in development mode</h3>
                        <Terminal code='npm start' />
                        <span>To start the voice app service, navigate into the root of the <span className='ayvaHighlight'>Hello Ayva</span> project folder and run <span className='code'>npm start</span>.</span> 
                        <span className='footNote'>(Bespoken Tool's proxy creates a public URL for the Hello Ayva service)</span>
                    </div>
                    <div key={'stepSeven'} />
                </div>
            </div>
        )
    }
}

export default StepSix
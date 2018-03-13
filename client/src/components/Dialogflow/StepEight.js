import React, {Component} from 'react'

class StepEight extends Component { 
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 8. </span>Next steps (adding Alexa)</span>
                </div>
                <div className='stepDescriptionBox'>
                    <div className='tutorialBox'>
                        <span>The next part of this tutorial will walk you through how to add Alexa to <span className='ayvaHighlight'>Hello Ayva</span>.</span>
                        <a href='/tutorial/alexa' className='nextTutorial'><span>Introduce Ayva to Alexa (Part 2).</span></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepEight
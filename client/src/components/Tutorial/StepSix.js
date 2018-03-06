
import React, {Component} from 'react'

class StepSix extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 6. </span>Ayva deploy</span>
                </div>
                <div className='stepDescriptionBox'>
                    <br />
                    <span className='terminalDescription'>
                        <img className='terminal' src={this.props.terminal} alt='terminal'/>
                        <span className='code'>ayva deploy</span>
                    </span>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>a. Import interaction model to Dialogflow agent</h3>
                        <span>Navigate into the 'avya-hello' directory created in step 5, and run this command. This will 
                        push the pre-defined interaction model in this voice application to the Dialogflow agent you created in Step 3. </span>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default StepSix
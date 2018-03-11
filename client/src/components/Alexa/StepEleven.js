import React, {Component} from 'react'

class StepEleven extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 11. </span>Ayva init</span>
                </div>
                <br />
                <div className='stepDescriptionBox'>
                    <span className='terminalDescription'>
                        <img className='terminal' src={this.props.terminal} alt='terminal'/>
                        <span className='code'>ayva init</span>
                    </span>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>10a. Run command to add Alexa configuration to Hello Ayva project.</h3>
                        <span> This creates a public URL for accessing the local service you will be starting for <span className='ayvaHighlight'>Hello Ayva</span>.</span>
                        <span className='footNote'>(Runs on port 8080 by default)</span>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default StepEleven
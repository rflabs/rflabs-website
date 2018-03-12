import React, {Component} from 'react'

class StepTwelve extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 12. </span>Ayva deploy & npm start</span>
                </div>
                <br />
                <div className='stepDescriptionBox'>
                    <span className='terminalDescription'>
                        <img className='terminal' src={this.props.terminal} alt='terminal'/>
                        <span className='code'>ayva deploy</span>
                    </span>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>12a. Import interaction model to Alexa skill.</h3>
                        <span>Navigate the root of your <span className='ayvaHighlight'>Hello Ayva</span> project, and run <span className='code'>ayva deploy</span>. This will push app's interaction model to your Alexa skill <a href='#stepNine' className='stepHighlight'>(created in Step 9)</a>.</span>
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>12b. Run Hello Ayva in development mode.</h3>
                        <span>In the root of the <span className='ayvaHighlight'>Hello Ayva</span> project folder, run <span className='code'>npm start</span>.</span> 
                        <span className='footNote'>(Bespoken Tool's proxy creates a public URL for this local service)</span>
                    </div>
                </div>
                <a id='stepThirteen'><span className='hidden'>stepThirteen</span></a>
            </div>
        )
    }
}

export default StepTwelve
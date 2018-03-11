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
                        <h3>10a. Run command in root of existing Hello Ayva project to add Alexa Skill ID.</h3>
                        <span>In order to configure <span className='code'>ayva deploy</span> for Alexa, we will need to add your Alexa Skill ID to the <span className='ayvaHighlight'>ayva.json</span> file in your existing Hello Ayva project folder. </span>
                        
                    </div>
                    <br />
                    <div className='tutorialImgBox'>
                        <h3>10b. Select 'Alexa' and enter the Alexa Skill ID <a href='#stepNine' className='stepHighlight'>(Step 9e)</a>.</h3>
                        <span>In order to configure <span className='code'>ayva deploy</span> for Alexa, we will need to add your Alexa Skill ID to the <span className='ayvaHighlight'>ayva.json</span> file in your existing Hello Ayva project folder. </span>
                        <br />
                    </div>
                    <a id='stepTwelve'><span className='hidden'>stepTwelve</span></a>
                </div>
            </div>
        )
    }
}

export default StepEleven
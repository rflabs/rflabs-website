import React, {Component} from 'react'

import {Terminal} from '../../components'

class StepEleven extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 11. </span>Ayva init</span>
                </div>
                <div className='stepDescriptionBox'>
                    
                    <div className='tutorialBox'>
                        <h3>10a. Run command in root of existing Hello Ayva project to add Alexa Skill ID.</h3>
                        <Terminal code='ayva init' />
                        <span>In order to configure <span className='code'>ayva deploy</span> for Alexa, we will need to add your Alexa Skill ID to the <span className='ayvaHighlight'>ayva.json</span> file in your existing Hello Ayva project folder. </span>   
                    </div>
                    <div className='tutorialBox'>
                        <h3>10b. Select 'Alexa' and enter the Alexa Skill ID <a href='#stepNine' className='stepHighlight'>(Step 9e)</a>.</h3>
                        <span>In order to configure <span className='code'>ayva deploy</span> for Alexa, we will need to add your Alexa Skill ID to the <span className='ayvaHighlight'>ayva.json</span> file in your existing Hello Ayva project folder. </span>
                    </div>
                    <div key={'StepTwelve'} />
                </div>
            </div>
        )
    }
}

export default StepEleven
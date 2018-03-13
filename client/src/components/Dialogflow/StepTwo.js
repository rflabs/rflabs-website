import React, {Component} from 'react'

import {Terminal} from '../../components'

import bespokenTools from './img/bespokenTools.png'

class StepTwo extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 2. </span>Install Bespoken Tools for local proxy</span>
                </div>
                <div className='stepDescriptionBox'>
                    <div className='tutorialBox'>
                        <Terminal code='npm install -g bespoken-tools' />
                        <span>
                            The command <span className='code'>ayva deploy</span>
                            <a href='#stepSix' className='stepHighlight'> (Step 6)</a> utilizes
                            <a href='https://bespoken.io/bst/' className='bespokenHighlight'> Bespoken</a> to create a local proxy url. 
                            Because using a local proxy avoids the necessity to deploy your code on every update, we highly recommend this for 
                            local development efficiency.</span>
                        <img className='screenshotImg' src={bespokenTools} alt='bespokenTools'/>
                    </div>
                    <span className='footNote'><a href='https://ngrok.com/'>(Ngrok</a> or similar can be used in place of <a href='https://bespoken.io'>Bespoken)</a>.</span>
                    <div key={'stepThree'} />
                </div>
            </div>
        )
    }
}

export default StepTwo
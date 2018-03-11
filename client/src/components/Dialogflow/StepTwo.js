
import React, {Component} from 'react'

import bespokenTools from './img/bespokenTools.png'


class StepTwo extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 2. </span>Install Bespoken Tools for local proxy</span>
                </div>
                <div className='stepDescriptionBox'>
                    <br />
                    <span className='terminalDescription'>
                        <img className='terminal' src={this.props.terminal} alt='terminal'/>
                        <span className='code'>npm install -g bespoken-tools</span>
                    </span>
                    <br />
                    <span>
                        The command <span className='code'>ayva deploy</span>
                        <a href='/tutorial#stepSix' className='stepHighlight'> (Step 6)</a> utilizes
                        <a href='https://bespoken.io/bst/' className='bespokenHighlight'> Bespoken</a> to create a local proxy url. 
                        Using a local proxy avoids the necessity to deploy your code on every update. This greatly increase the 
                        efficiecy of local development.</span>
                    <br />
                    <div className='tutorialImgBox'>
                        <img className='threeImg' src={bespokenTools} alt='bespokenTools'/>
                    </div>
                    <br />
                    <span className='footNote'><a href='https://ngrok.com/'>(Ngrok</a> or similar can be used in place of <a href='https://bespoken.io'>Bespoken)</a>.</span>
                    <a id='stepThree'><span className='hidden'>stepThree</span></a>
                </div>
            </div>
        )
    }
}

export default StepTwo

import React, {Component} from 'react'



class StepTwo extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span><span className='stepTitle'>Step 2. </span>Install Bespoken Tools for local proxy</span>
                </div>
                <div className='stepDescriptionBox'>
                    <br />
                    <span className='terminalDescription'>
                        <img className='terminal' src={this.props.terminal} alt='terminal'/>
                        <span className='code'>npm install -g bespoken-tools</span>
                    </span>
                    <br />
                    <span>The Ayva deploy command in our CLI utilizes <a href='https://bespoken.io/bst/'>Bespoken</a> to create a local proxy url. 
                    This greatly increase the efficiecy of local development. Using a local proxy avoids the 
                    necessity to deploy your code on every update.</span>
                    <br />
                    <div className='stepLinks'>
                        <div className='npmBox'>
                            <a href='https://www.npmjs.com/package/bespoken-tools'><img className='npm' src={this.props.npm} alt='npm'/></a>
                        </div>
                        <div className='githubBox'>
                            <a href='https://github.com/bespoken/bst'><img className='githubBlack' src={this.props.githubBlack} alt='githubBlack'/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepTwo
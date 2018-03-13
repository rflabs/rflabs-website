
import React, {Component} from 'react'

import {Terminal} from '../../components'

class StepOne extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 1. </span>Install Ayva CLI</span>
                </div>
                <div className='stepDescriptionBox'>
                    <div className='tutorialBox'>
                        <Terminal code='npm install -g ayva-cli' />
                        <span>Use a command line tool to install the <span className='ayvaHighlight'>Ayva command line interface (CLI)</span>. This tool will allow you to create new voice assistant projects 
                        and deploy interaction models to any supported voice assistant platform.</span>
                    </div>
                    <div className='stepLinks'>
                        <div className='npmBox'>
                            <a href='https://www.npmjs.com/package/bespoken-tools'><img className='npm' src={this.props.npm} alt='npm'/></a>
                        </div>
                        <div className='githubBox'>
                            <a href='https://github.com/bespoken/bst'><img className='githubBlack' src={this.props.githubBlack} alt='githubBlack'/></a>
                        </div>
                    </div>
                    <div key={'stepTwo'} />
                </div> 
            </div>
        )
    }
}

export default StepOne
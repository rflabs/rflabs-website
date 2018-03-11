import React, {Component} from 'react'

class StepTen extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span className='stepHeader'><span className='stepTitle'>Step 10. </span>Install & configure Amazon Ask CLI</span>
                </div>
                <br />
                <div className='stepDescriptionBox'>
                    <span className='terminalDescription'>
                        <img className='terminal' src={this.props.terminal} alt='terminal'/>
                        <span className='code'>npm install -g ask-cli</span>
                    </span>
                </div>
            </div>
        )
    }
}

export default StepTen
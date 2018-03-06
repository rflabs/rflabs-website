
import React, {Component} from 'react'

class StepSix extends Component {
    render() {
        return (
            <div className='stepBox'>
                <div className='stepTitleBox'>
                    <span><span className='stepTitle'>Step 5. </span>Ayva deploy</span>
                </div>
                <div className='stepDescriptionBox'>
                    <br />
                    <span className='terminalDescription'>
                        <img className='terminal' src={this.props.terminal} alt='terminal'/>
                        <span className='code'>ayva deploy</span>
                    </span>
                    <br />
                    <span>Navigate into the 'hello-ayva' directory (created in step 4), and run this command. This will 
                    push the interaction model in ths voice project and </span>
                </div>
            </div>
        )
    }
}

export default StepSix
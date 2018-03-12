import React, {Component} from 'react'

import './code.css'

class Terminal extends Component {
    render() {
        return (
            <div className='terminalDescription'>
                <div className='terminalBox'>
                    <div className ='terminalCodeBox'>
                        <span className='terminalCode'><span className='terminalPre'>&gt;_</span> {this.props.code}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Terminal
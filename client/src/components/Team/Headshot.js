
import React, {Component} from 'react'


class Headshot extends Component {
    render() {
        return (
            <div className='halfBox'> 
                <div className='headshotBox'>
                    <img className='headshot' src={this.props.individual} alt='headshot'/>
                </div>
                <div className='bioDetails'>
                    <div className='bioTitle'>
                    <h3>{this.props.bioTitle}</h3>
                    </div>
                    <div className='bioName'>
                        <h1>{this.props.bioName}</h1>
                    </div>
                    <div className='bioSocialMedia'>
                        <div className='linkedInIcon'>
                            <a href={this.props.inkedInURL}><img className='linkedin' src={this.props.linkedin} alt='linkedin' /></a>
                        </div>
                        <div className='linkedInText'>
                            <a href={this.props.linkedInURL}>LinkedIn Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headshot
import React, {Component} from 'react'

import './ayva.css'

import ayvaArchitecture from '../../img/ayva-architecture-v2.png' 

class Ayva extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <div className='mainOne'>
                    <div className='ayvaDescription'>
                        <div className='ayvaArchitecture'>
                            <img className='ayvaArchitectureImg' src={ayvaArchitecture} alt='ayvaArchitecture'/>
                        </div>
                        <div className='ayvaOverview'>
                            <span><span className='ayva'>Ayva</span> is an open-source cross-platform developer 
                            framework used to build voice assistant applications. The features and tools provided in 
                            this framework are platform agnostic, allowing developers to build their app once and deploy 
                            on both Google Assistant and Alexa.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ayva;
import React, {Component} from 'react'

import './ayva.css'

import ayvaArchitecture from '../../img/ayva-architecture-v2.png' 

class Ayva extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <div className='mainOne'>
                    <div className='ayvaDescription'>
                        <div className='ayvaOverview'>
                            <span>Ayva is an open-source cross-platform developer framework used to build voice assistant applications. The features and tools provided in this framework are platform agnostic, allowing developers to build their app once and deploy on both Google Assistant and Alexa.</span>
                        </div>
                        <div className='ayvaComponents'>
                            <h1>The Ayva framework is built of: </h1>
                        </div>
                        <div className='ayvaComponentList'>
                            <ul>
                                <li>Ayva Library</li>
                                <li>Ayva CLI</li>
                                <li>Middleware</li>
                            </ul>
                        </div>
                        <div className='ayvaBenefit'>
                            <span>Ayva uses platform agnostic interaction models, so your voice application will have the same user experience across Google Assistant and Alexa.</span>
                        </div>
                        <div className='ayvaArchitecture'>
                            <img className='ayvaArchitectureImg' src={ayvaArchitecture} alt='ayvaArchitecture'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ayva;
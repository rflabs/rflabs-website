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
                    </div>
                </div>
            </div>
        )
    }
}

export default Ayva;
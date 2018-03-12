import React, {Component} from 'react'

import './home.css'

class Home extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <div className='mainOne'>
                    <div className='primaryMessageBox'>
                        <div className='firstMessage'>
                        <h1>Hello Ayva.</h1>
                        </div>
                        <div className='secondMessage'>
                        <span>A new way to develop cross-platform voice assistant apps</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
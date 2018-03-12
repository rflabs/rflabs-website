import React, {Component} from 'react'

class Instructions extends Component {
    render() {
        return (
            <div className='tableOfContents'>
                <h3>Instructions</h3>
                <ol className='contentList' start="9">
                    <li><a href='#stepNine'>Create Alexa developer account & new skill</a></li>
                    <li><a href='#stepTen'>Install Amazon Ask CLI</a></li>
                    <li><a href='#stepEleven'>Ayva init</a></li>
                    <li><a href='#stepTwelve'>Ayva deploy</a></li>
                    <li><a href='#stepTwelve'>Test on Alexa</a></li>
                </ol>
            </div>
        )
    }
}

export default Instructions


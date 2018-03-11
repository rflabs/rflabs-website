import React, {Component} from 'react'

class Instructions extends Component {
    render() {
        return (
            <div className='tableOfContents'>
                <h3>Instructions</h3>
                <ol className='contentList' start="9">
                    <a href='#stepNine'><li>Create Alexa developer account & new skill</li></a>
                    <a href='#stepTen'><li>Install Amazon Ask CLI</li></a>
                    <a href='#stepEleven'><li>Ayva init</li></a>
                    <a href='#stepTwelve'><li>Ayva deploy</li></a>
                    <a href='#stepTwelve'><li>Test on Alexa</li></a>
                </ol>
            </div>
        )
    }
}

export default Instructions


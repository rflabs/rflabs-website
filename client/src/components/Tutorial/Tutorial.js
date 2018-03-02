
import React, {Component} from 'react'

import './tutorial.css'

class Tutorial extends Component {
    render() {
        return (
            <div className='ayvaBox'>
                <div className='helloAyva'>
                    <div className='helloAyvaDescription'>
                        <span><span className='helloAyvaTitle'>Hello Ayva</span> is a tutorial of how to use Ayva 
                        to create and deploy a voice application on your local Google assistant device.</span>
                    </div>
                    <div className='stepOne'>
                        <div className='stepTitleBox'>
                            <span><span className='stepTitle'>Step 1. </span>Install Ayva CLI</span>
                        </div>
                        <div className='stepDescriptionBox'>
                            <br />
                            <span><span className='code'>npm install -g ayva-cli</span></span>
                            <br />
                            <span>The Ayva CLI will allow you to create new voice assistant projects 
                            and deploy interaction models to any supported voice assistant platform.</span>
                        </div>
                        <div className='stepTitleBox'>
                            <span><span className='stepTitle'>Step 2. </span>Install Bespoken Tools for local proxy</span>
                        </div>
                        <div className='stepDescriptionBox'>
                            <br />
                            <span><span className='code'>npm install -g bespoken-tools</span></span>
                            <br />
                            <span>The Ayva deploy command in our CLI utilizes Bespoken to create a local proxy url. 
                            This greatly increase the efficiecy of local development. Using a local proxy avoids the 
                            necessity to deploy your code on every update.</span>
                        </div>
                        <div className='stepTitleBox'>
                            <span><span className='stepTitle'>Step 3. </span>Create a <a href='https://console.dialogflow.com/api-client/authorize_url_google/nopopup'>Dialogflow developer account</a></span>
                        </div>
                        <div className='stepDescriptionBox'>
                            <br />
                            <span>In order to create a new voice app on Google Assistant, we will first need to create a Dialogflow 
                            account to create a new skill.</span>
                            <br />
                            <a href='https://dialogflow.com/docs/getting-started/building-your-first-agent#create_an_agent'>Helpful tutorial from Dialogflow</a>
                        </div>
                        <div className='stepTitleBox'>
                            <span><span className='stepTitle'>Step 4. </span>Create a new Dialogflow agent</span>
                        </div>
                        <div className='stepDescriptionBox'>
                        <br />
                            <span>Ayva currently uses Dialogflow V1 API. In order to utilize Ayva deploy, you will need to first 
                            create a new Dialogflow agent to obtain your Developer access token. This is what Ayva will use to 
                            configure the interaction model for your voice assitant app.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tutorial
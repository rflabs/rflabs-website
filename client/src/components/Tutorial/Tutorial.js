
import React, {Component} from 'react'

import './tutorial.css'

import threeA from '../../img/threeA.png'
import threeB from '../../img/threeB.png'
import threeC from '../../img/threeC.png'
import threeD from '../../img/threeD.png'
import threeE from '../../img/threeE.png'

import terminal from '../../img/terminal.png'
import npm from '../../img/npm.png'
import githubBlack from '../../img/github-black.png'


class Tutorial extends Component {
    render() {
        return (
            <div className='ayvaBox'>
                <div className='helloAyva'>
                    <div className='helloAyvaDescription'>
                        <span><span className='helloAyvaTitle'>Hello Ayva</span> is a tutorial of how to use Ayva 
                        to create and deploy a voice application on your local Google assistant device.</span>
                    </div>
                    <div className='stepBox'>
                        <div className='stepTitleBox'>
                            <span><span className='stepTitle'>Step 1. </span>Install Ayva CLI</span>
                        </div>
                        <div className='stepDescriptionBox'>
                            <br />
                            <span className='terminalDescription'>
                                <img className='terminal' src={terminal} alt='terminal'/>
                                <span className='code'>npm install -g ayva-cli</span>
                            </span>
                            <br />
                            <span>Use a command line tool to install the Ayva command line interface (CLI). This tool will allow you to create new voice assistant projects 
                            and deploy interaction models to any supported voice assistant platform.</span>
                            <br />
                            <div className='stepLinks'>
                                <div className='npmBox'>
                                    <a href='https://www.npmjs.com/package/bespoken-tools'><img className='npm' src={npm} alt='npm'/></a>
                                </div>
                                <div className='githubBox'>
                                    <a href='https://github.com/bespoken/bst'><img className='githubBlack' src={githubBlack} alt='githubBlack'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='stepBox'>
                        <div className='stepTitleBox'>
                            <span><span className='stepTitle'>Step 2. </span>Install Bespoken Tools for local proxy</span>
                        </div>
                        <div className='stepDescriptionBox'>
                            <br />
                            <span className='terminalDescription'>
                                <img className='terminal' src={terminal} alt='terminal'/>
                                <span className='code'>npm install -g bespoken-tools</span>
                            </span>
                            <br />
                            <span>The Ayva deploy command in our CLI utilizes Bespoken to create a local proxy url. 
                            This greatly increase the efficiecy of local development. Using a local proxy avoids the 
                            necessity to deploy your code on every update.</span>
                            <br />
                            <div className='stepLinks'>
                                <div className='npmBox'>
                                    <a href='https://www.npmjs.com/package/bespoken-tools'><img className='npm' src={npm} alt='npm'/></a>
                                </div>
                                <div className='githubBox'>
                                    <a href='https://github.com/bespoken/bst'><img className='githubBlack' src={githubBlack} alt='githubBlack'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='stepBox'>
                        <div className='stepTitleBox'>
                            <span><span className='stepTitle'>Step 3. </span>Create a <a href='https://console.dialogflow.com/api-client/authorize_url_google/nopopup'>Dialogflow developer account</a> & new agent</span>
                        </div>
                        <div className='stepDescriptionBox'>
                            <br />
                            <span>In order to create a new voice app on Google Assistant, we will first need to create a Dialogflow 
                            account to create a new skill.</span>
                            <a href='https://dialogflow.com/docs/getting-started/building-your-first-agent#create_an_agent'>(Helpful tutorial from Dialogflow)</a>
                            <br />
                            <div className='threeImgBox'>
                                <h3>a. Sign in to Dialogflow with Google</h3>
                                <img className='threeImg' src={threeA} alt='threeA'/>
                            </div>
                            <br />
                            <div className='threeImgBox'>
                                <h3>b. Click on 'Create Agent' tab</h3>   
                                <img className='threeImg' src={threeB} alt='threeB'/>
                            </div>
                            <br />
                            <div className='threeImgBox'>
                                <h3>c. Enter 'hello-ayva' for the agent name and click 'Create'</h3>   
                                <img className='threeImg' src={threeC} alt='threeC'/>
                            </div>
                            <br />
                            <div className='threeImgBox'>
                                <h3>d. Go to agent configuration to acquire developer access token under the 'General' tab.</h3>
                                <img className='threeImg' src={threeD} alt='threeC'/>
                                <br />
                                <img className='threeImg' src={threeE} alt='threeE'/>
                            </div>
                            <br />
                            <span>Ayva currently uses <a href='https://dialogflow.com/docs/reference/agent/'>Dialogflow V1 API</a>. In order to utilize Ayva deploy, you will need 
                                your Dialogflow Developer access token. Ayva will use this to
                                import your voice application's interaction model to Dialogflow.</span>
                        </div>
                    </div>
                    <div className='stepBox'>
                        <div className='stepTitleBox'>
                            <span><span className='stepTitle'>Step 4. </span>Run ayva hello</span>
                        </div>
                        <div className='stepDescriptionBox'>
                            <br />
                            <span className='terminalDescription'>
                                <img className='terminal' src={terminal} alt='terminal'/>
                                <span className='code'>ayva hello</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tutorial
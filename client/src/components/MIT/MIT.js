
import React, {Component} from 'react'

import './mit.css'

class MIT extends Component {
    render() {
        return (
            <div className='mainContainer'>
                <div className='mainOne'>
                    <div className='mitLicense'>
                        <span>Copyright 2017-present Refresh Labs LLC</span>
                        <a href='https://www.refreshlabs.co'>https://www.refreshlabs.co</a>
                        <br />
                        <span><b>MIT License</b></span>
                        <br />
                        <span>
                            Permission is hereby granted, free of charge, to any person obtaining 
                            a copy of this software and associated documentation files (the
                            "Software"), to deal in the Software without restriction, including
                            without limitation the rights to use, copy, modify, merge, publish,
                            distribute, sublicense, and/or sell copies of the Software, and to
                            permit persons to whom the Software is furnished to do so, subject to
                            the following conditions:
                        </span>
                        <br />
                        <span>
                            The above copyright notice and this permission notice shall be
                            included in all copies or substantial portions of the Software.
                        </span>
                        <br />
                        <span>
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
                            LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
                            OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
                            WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MIT;
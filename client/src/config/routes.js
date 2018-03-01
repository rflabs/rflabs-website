
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {MainContainer, 
        HomeContainer,
        AyvaContainer,
        TeamContainer,
        MITContainer} from '../containers';


const routes = (
    <Router>
        <Switch> 
            <MainContainer> 
                <Route exact path='/' component={HomeContainer} />
                <Route path='/ayva' component={AyvaContainer} />
                <Route path='/team' component={TeamContainer} />
                <Route path='/MIT' component={MITContainer} />
            </MainContainer>       
        </Switch>
    </Router>
)

export default routes;
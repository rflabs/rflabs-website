import React from 'react';
import {connect} from 'react-redux'

import {TopBarContainer} from '../../containers'

import './dashboard.css'

class DashboardContainer extends React.Component {


    mainMenu() {
        return (
            <div className='main'>
          
            </div>
        )
    }

    currentPage(status){
        switch(this.props.loadingStatus){
            case "INIT" : return this.landingPage();
            default: return this.mainMenu(); 
        }
    }

    render() {
        var page = this.currentPage();
        return (
            <div className="dashboard">
                <TopBarContainer loadingStatus={this.props.loadingStatus}/>
                {page}
            </div>
        )  
    }
}

function mapStateToProps({dashboard}) {
    return {
        sessionCode: dashboard.sessionCode,
        connectCode: dashboard.connectCode,
        openApps: dashboard.openApps,
        loadingStatus: dashboard.loadingStatus
    }
}

export default connect(mapStateToProps)(DashboardContainer);
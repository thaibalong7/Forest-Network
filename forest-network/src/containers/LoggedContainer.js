import React, { Component } from 'react';
import HomeContainer from './HomeContainer'
import MeContainer from './MeContainer'
import NotificationContainer from './NotificationContainer'
import NavigationBar from '../components/Header/NavigationBar';
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class LoggedContainer extends Component {
    log_out = () => {
        console.log('log-out')
        localStorage.setItem("flagReducer", JSON.stringify("home"));
        let { history } = this.props;
        history.push('/');
    }
    render() {
        return (
            <Router>
                <div className="bg-grey-light font-sans">
                    <NavigationBar flag={this.props.flag} log_out={this.log_out}/>
                    <Switch>
                        <Route exact path="/home" component={HomeContainer} />
                        <Route path="/home/me" component={MeContainer} />
                        <Route path="/home/notifications" component={NotificationContainer} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default (LoggedContainer);
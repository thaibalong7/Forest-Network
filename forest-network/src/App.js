import React, { Component } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import MeContainer from './containers/MeContainer'
import NotificationContainer from './containers/NotificationContainer'
import NavigationBar from './components/Header/NavigationBar';
import {connect} from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginContainer from './containers/LoginContainer';

class App extends Component {
	render() {
		console.log(this.props.flag);
		return (
			<Router>
				<div className="bg-grey-light font-sans">
					<NavigationBar flag={this.props.flag}/>
					<Switch>
						<Route exact path="/" component={LoginContainer} />
						<Route path="/home" component={HomeContainer} />
						<Route path="/me" component={MeContainer} />
						<Route path="/notifications" component={NotificationContainer} />
					</Switch>		
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state =>{
    return {
        flag: state.flagPageReducer
    }
}

export default connect(mapStateToProps, null)(App);


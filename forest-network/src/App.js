import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginContainer from './containers/LoginContainer';
import LoggedContainer from './containers/LoggedContainer'

class App extends Component {
	render() {
		return (
			<Router>
					<Switch>
						<Route exact path="/" component={LoginContainer} />
						<Route path="/home" component={LoggedContainer}>
						</Route>
					</Switch>
			</Router>
		);
	}
}

const mapStateToProps = state => {
	return {
		flag: state.flagPageReducer
	}
}

export default connect(mapStateToProps, null)(App);


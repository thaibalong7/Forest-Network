import React, { Component } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import MeContainer from './containers/MeContainer'
import NotificationContainer from './containers/NotificationContainer'
import TweetContainer from './containers/TweetContainer'
import FollowingContainer from './containers/FollowingContainer'
import FollowerContainer from './containers/FollowerContainer'
import NavigationBar from './components/Header/NavigationBar';
import {connect} from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginContainer from './containers/LoginContainer';
import Login from './components/Login';
class App extends Component {
	render() {
		return (
			<Router>
				<div className="bg-grey-light font-sans">
				<NavigationBar flag={this.props.flag}/>
					<Switch>
						<Route exact path="/" component={LoginContainer} />
						<Route path="/home" component={HomeContainer} />
						<Route path="/me" component={MeContainer} />
						<Route path="/notifications" component={NotificationContainer} />
						<Route path="/tweet" component={TweetContainer} />
						<Route path="/following" component={FollowingContainer} />
						<Route path="/follower" component={FollowerContainer} />
					</Switch>		
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state =>{
    return {
        flag: state.flagReducer
    }
}

export default connect(mapStateToProps, null)(App);


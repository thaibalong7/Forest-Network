import React, { Component } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import MeContainer from './containers/MeContainer'
import NotificationContainer from './containers/NotificationContainer'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
	render() {
		return (
			<Router>
				{/* <div className="container-fluid"> */}
					<Switch>
						<Route exact path="/" component={HomeContainer} />
						<Route path="/home" component={HomeContainer} />
						<Route path="/me" component={MeContainer} />
						<Route path="/notifications" component={NotificationContainer} />
					</Switch>		
				{/* </div> */}
			</Router>
		);
	}
}

export default App;

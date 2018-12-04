import React, { Component } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
	render() {
		return (
			<Router>
				{/* <div className="container-fluid"> */}
					<Switch>
						<Route exact path="/" component={HomeContainer} />
						<Route path="/home" component={HomeContainer} />
					</Switch>		
				{/* </div> */}
			</Router>
		);
	}
}

export default App;

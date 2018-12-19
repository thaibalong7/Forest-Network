import React, { Component } from 'react';
import Home from '.././components/Home'
import Login from '../components/Login';



class LoginContainer extends Component {
	render() {
		return (
			<Login flag = "login"></Login>
		);
	}
}

export default LoginContainer;
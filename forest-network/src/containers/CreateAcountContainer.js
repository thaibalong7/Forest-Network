import React, { Component } from 'react';
import Home from '.././components/Home'
import Login from '../components/CreateAcount';
import CreateAcount from '../components/CreateAcount';

class CreateAcountContainer extends Component {
	render() {
		return (
			<CreateAcount flag = "create">
            </CreateAcount>
		);
	}
}

export default CreateAcountContainer;
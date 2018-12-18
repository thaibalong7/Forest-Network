import React, { Component } from 'react';
import MeComponent from './../components/MeComponent'

class MeContainer extends Component {
	render() {
		return (
			<div>
				<MeComponent flag="me">
				</MeComponent>
			</div>
		);
	}
}

export default MeContainer;
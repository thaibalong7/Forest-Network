import React, { Component } from 'react';
import Follower from './../components/Follower';

class FollowerContainer extends Component {
	render() {
		return (
			<div>
				<Follower flag="me">
				</Follower>
			</div>
		);
	}
}

export default FollowerContainer;
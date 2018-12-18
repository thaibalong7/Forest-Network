import React, { Component } from 'react';
import Following from './../components/Following';

class FollowingContainer extends Component {
	render() {
		return (
			<div>
				<Following flag="me">
				</Following>
			</div>
		);
	}
}

export default FollowingContainer;
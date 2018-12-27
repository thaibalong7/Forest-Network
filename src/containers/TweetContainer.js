import React, { Component } from 'react';
import Tweet from './../components/Tweet';

class TweetContainer extends Component {
	render() {
		return (
			<div>
				<Tweet flag="me">
				</Tweet>
			</div>
		);
	}
}

export default TweetContainer;
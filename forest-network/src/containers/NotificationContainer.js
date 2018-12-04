import React, { Component } from 'react';
import Notifications from './../components/Notifications';

class NotificationContainer extends Component {
	render() {
		return (
			<div>
				<Notifications flag="noti">
				</Notifications>
			</div>
		);
	}
}

export default NotificationContainer;
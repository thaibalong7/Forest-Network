import React, { Component } from 'react';
import HistoricalTransaction from './../components/HistoricalTransaction';

class HistoricalTransactionContainer extends Component {
	render() {
		console.log("aaaaaaaaaaaaa");
		console.log(this.props.match.url);
		return (
			<HistoricalTransaction>
			</HistoricalTransaction>
		);
	}
}

export default HistoricalTransactionContainer;
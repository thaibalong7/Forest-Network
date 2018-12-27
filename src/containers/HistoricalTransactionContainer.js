import React, { Component } from 'react';
import HistoricalTransaction from './../components/HistoricalTransaction';
import { API_server } from '../config';
import axios from 'axios';
import { connect } from 'react-redux';
import { update_historical_transaction, loadmore_historical_transaction } from '../actions';
async function asyncForEach(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		await cb(arr[i], i);
	}
}


class HistoricalTransactionContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loadingState: true,
			page: 1,
			nothingToLoad: false,
			per_page: 2
		}
	}
	componentDidMount = async () => {
		if (this.props.userProfileReducer.id === '')
			return;
		else {
			this.update_tweets();
		}
	}
	componentDidUpdate = async (prevProps) => {
		if (this.props.userProfileReducer.id !== prevProps.userProfileReducer.id) {
			this.update_tweets();
		}
	}
	add_tweets = async (data) => { //data là dữ liệu của các transaction có liên quan được trả về qua api
		const list_tweets = [];
		await asyncForEach(data, async (e, i) => {
			var tweet = {};
			const sender_info = await axios.post(API_server + 'user/login', { public_key: e.sender })
			const receiver_info = await axios.post(API_server + 'user/login', { public_key: e.receiver })
			tweet = {
				creatorId: e.sender,
				creatorName: sender_info.data.account_info.name,
				creatorAvatar: sender_info.data.account_info.avatar,
				createAt: e.createAt,
				operation: 'payment',
				param: {
					address: e.receiver,
					name: receiver_info.data.account_info.name,
					amount: e.amount
				}
			}
			this.props.loadmore_historical_transaction([tweet])
		})
		return list_tweets;
	}
	update_tweets = async () => { //tạo các tweets đầu tiên để hiển thị
		if (this.state.page !== -1) {
			this.setState({ loadingState: true });
			await axios.get(API_server + 'payment/getPaymentById/' + this.props.userProfileReducer.id + '&' + this.state.per_page + '&' + this.state.page)
				.then(async rs => {
					await this.add_tweets(rs.data.data);
					this.setState({
						page: rs.data.next_page
					})
				})
			await axios.get(API_server + 'payment/getPaymentById/' + this.props.userProfileReducer.id + '&' + this.state.per_page + '&' + this.state.page)
				.then(async rs => {
					await this.add_tweets(rs.data.data);
					this.setState({
						page: rs.data.next_page
					})
				})
			this.setState({ loadingState: false });
		}
		else {
			this.setState({ nothingToLoad: false });
		}
	}
	loadMoreTransaction = async () => {
		if (this.state.page !== -1) {
			this.setState({
				loadingState: true,
			});
			await axios.get(API_server + 'payment/getPaymentById/' + this.props.userProfileReducer.id + '&' + this.state.per_page + '&' + this.state.page)
				.then(async rs => {
					const list_tweets = await this.add_tweets(rs.data.data);
					this.setState({
						page: rs.data.next_page
					})
				})
			this.setState({ loadingState: false });
		}
		else {
			this.setState({ nothingToLoad: false });
		}
	}
	render() {
		return (
			<HistoricalTransaction loadingState={this.state.loadingState}
				nothingToLoad={this.state.nothingToLoad}
				historicalTransaction={this.props.historicalTransactionReducer}
				loadMoreTransaction={this.loadMoreTransaction}
				userProfileReducer={this.props.userProfileReducer}>
			</HistoricalTransaction>
		);
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		update_historical_transaction: (list_transaction) => {
			dispatch(update_historical_transaction(list_transaction));
		},
		loadmore_historical_transaction: (list_transaction) => {
			dispatch(loadmore_historical_transaction(list_transaction));
		},
	}
}

const mapStateToProps = (state) => ({
	userProfileReducer: state.userProfileReducer,
	historicalTransactionReducer: state.historicalTransactionReducer
})
export default connect(mapStateToProps, mapDispatchToProps)(HistoricalTransactionContainer);
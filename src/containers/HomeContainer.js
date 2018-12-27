import React, { Component } from 'react';
import Home from '.././components/Home'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { API_server } from '../config';
import axios from 'axios';
import { update_tweets_home, loadmore_tweets_home } from '../actions';
import {
	decodeCreateAccount,
	decodeFollowings,
	decodePayment,
	decodePost,
	decodePostParams,
	decodeUpdateAccount,
} from '../lib/transaction/v1'
import base32 from 'base32.js';
import { increase_sequence } from '../actions'
async function asyncForEach(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		await cb(arr[i], i);
	}
}

class HomeContainer extends Component {
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
	update_tweets = async () => { //tạo các tweets đầu tiên để hiển thị
		if (this.state.page !== -1) {
			this.setState({ loadingState: true });
			await axios.get(API_server + 'transactions/getTweetsInHome/' + this.props.userProfileReducer.id + '&' + this.state.per_page + '&' + this.state.page)
				.then(async rs => {
					const list_tweets = await this.add_tweets(rs.data.data);
					this.props.update_tweets_home(list_tweets)
					this.setState({
						page: rs.data.next_page
					})
				})
			await axios.get(API_server + 'transactions/getTweetsInHome/' + this.props.userProfileReducer.id + '&' + this.state.per_page + '&' + this.state.page)
				.then(async rs => {
					const list_tweets = await this.add_tweets(rs.data.data);
					this.props.loadmore_tweets_home(list_tweets)
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
	add_tweets = async (data) => { //data là dữ liệu của các transaction có liên quan được trả về qua api
		const list_tweets = [];
		await asyncForEach(data, async (e, i) => {
			var tweet = {};
			await axios.post(API_server + 'user/login', { public_key: e.account }).then(async rs => {
				if (e.operation === 'create_account') {
					const param = decodeCreateAccount(Buffer.from(e.params));
					tweet = {
						tweetsId: e.id,
						creatorId: e.account,
						creatorName: rs.data.account_info.name,
						creatorAvatar: rs.data.account_info.avatar,
						createAt: e.createAt,
						operation: e.operation,
						param: {
							address: base32.encode(Buffer.from(param.address))
						}
					}
				} else if (e.operation === 'update_account') {
					const param = decodeUpdateAccount(Buffer.from(e.params));
					if (param.key === 'name') {
						tweet = {
							tweetsId: e.id,
							creatorId: e.account,
							creatorName: rs.data.account_info.name,
							creatorAvatar: rs.data.account_info.avatar,
							createAt: e.createAt,
							operation: e.operation,
							param: {
								key: param.key,
								value: new TextDecoder("utf-8").decode(param.value)
							}
						}
					}
					else if (param.key === 'picture') {
						tweet = {
							tweetsId: e.id,
							creatorId: e.account,
							creatorName: rs.data.account_info.name,
							creatorAvatar: rs.data.account_info.avatar,
							createAt: e.createAt,
							operation: e.operation,
							param: {
								key: param.key,
								value: btoa(String.fromCharCode.apply(null, param.value))
							}
						}
					}
					else if (param.key === 'followings') {
						decodeFollowings(Buffer.from(param.value))
						const listFollowings = [];
						await asyncForEach(decodeFollowings(Buffer.from(param.value)).addresses, async (acc, i) => {
							await axios.get(API_server + 'user/getName/' + base32.encode(Buffer.from(acc))).then(async rs => {
								listFollowings.push({
									id: base32.encode(Buffer.from(acc)),
									name: rs.data.name
								})
							})
						})
						tweet = {
							tweetsId: e.id,
							creatorId: e.account,
							creatorName: rs.data.account_info.name,
							creatorAvatar: rs.data.account_info.avatar,
							createAt: e.createAt,
							operation: e.operation,
							param: {
								key: param.key,
								value: listFollowings
							}
						}
					}
				}
				else if (e.operation === 'payment') {
					const param = decodePayment(Buffer.from(e.params));
					await axios.get(API_server + 'user/getName/' + base32.encode(Buffer.from(param.address))).then(async rsName => {
						tweet = {
							tweetsId: e.id,
							creatorId: e.account,
							creatorName: rs.data.account_info.name,
							creatorAvatar: rs.data.account_info.avatar,
							createAt: e.createAt,
							operation: e.operation,
							param: {
								address: base32.encode(Buffer.from(param.address)),
								name: rsName.data.name,
								amount: param.amount
							}
						}
					}).catch(e => { console.log(e) })
				}
				else if (e.operation === 'post') {
					const param = decodePostParams(Buffer.from(e.params));
					tweet = {
						tweetsId: e.id,
						creatorId: e.account,
						creatorName: rs.data.account_info.name,
						creatorAvatar: rs.data.account_info.avatar,
						createAt: e.createAt,
						operation: e.operation,
						param: {
							value: new TextDecoder("utf-8").decode(param.content)
						}
					}
				}

			}).catch(e => { })
			list_tweets.push(tweet)
		})
		return list_tweets;
	}
	componentDidUpdate = async (prevProps) => {
		if (this.props.userProfileReducer.id !== prevProps.userProfileReducer.id) {
			this.update_tweets();
		}
	}
	loadMoreTweets = async () => {
		if (this.state.page !== -1) {
			this.setState({
				loadingState: true,
			});
			await axios.get(API_server + 'transactions/getTweetsInHome/' + this.props.userProfileReducer.id + '&' + this.state.per_page + '&' + this.state.page)
				.then(async rs => {
					const list_tweets = await this.add_tweets(rs.data.data);
					this.props.loadmore_tweets_home(list_tweets)
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
			<Home flag="home" loadingState={this.state.loadingState}
				nothingToLoad={this.state.nothingToLoad}
				tweetsHome={this.props.tweetsHomeReducer}
				loadMore={this.loadMoreTweets}
				userProfileReducer={this.props.userProfileReducer}
				increase_sequence={this.props.increase_sequence}>
			</Home>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		update_tweets_home: (tweets_user) => {
			dispatch(update_tweets_home(tweets_user));
		},
		loadmore_tweets_home: (tweets_user) => {
			dispatch(loadmore_tweets_home(tweets_user));
		},
		increase_sequence: () => {
			dispatch(increase_sequence());
		},
	}
}

const mapStateToProps = (state) => ({
	userProfileReducer: state.userProfileReducer,
	tweetsHomeReducer: state.tweetsHomeReducer
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
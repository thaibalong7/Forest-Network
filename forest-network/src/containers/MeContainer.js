import React, { Component } from 'react';
import MeComponent from '../components/MeComponent'
import { connect } from 'react-redux';
import { API_server } from '../config';
import axios from 'axios';
import { update_tweets_user, loadmore_tweets_user, increase_sequence } from '../actions';
import {
	decodeCreateAccount,
	decodeFollowings,
	decodePayment,
	decodePost,
	decodePostParams,
	decodeUpdateAccount,
} from '../lib/transaction/v1';
import base32 from 'base32.js';
async function asyncForEach(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		await cb(arr[i], i);
	}
}
class MeContainer extends Component {
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

	update_tweets = async () => { //tạo các tweets đầu tiên để hiển thị
		if (this.state.page !== -1) {
			this.setState({ loadingState: true });

			await axios.get(API_server + 'transactions/getTweetsInMe/' + this.props.userProfileReducer.id + '&' + this.state.per_page + '&' + this.state.page)
				.then(async rs => {
					const list_tweets = await this.add_tweets(rs.data.data);
					this.props.update_tweets_user(list_tweets)
					this.setState({
						page: rs.data.next_page
					})
				})
			await axios.get(API_server + 'transactions/getTweetsInMe/' + this.props.userProfileReducer.id + '&' + this.state.per_page + '&' + this.state.page)
				.then(async rs => {
					const list_tweets = await this.add_tweets(rs.data.data);
					this.props.loadmore_tweets_user(list_tweets)
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
			if (e.operation === 'create_account') {
				const param = decodeCreateAccount(Buffer.from(e.params));
				tweet = {
					tweetsId: e.id,
					creatorId: e.account,
					creatorName: this.props.userProfileReducer.name !== null ? this.props.userProfileReducer.name : this.props.userProfileReducer.id,
					creatorAvatar: this.props.userProfileReducer.avatar,
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
						creatorName: this.props.userProfileReducer.name !== null ? this.props.userProfileReducer.name : this.props.userProfileReducer.id,
						creatorAvatar: this.props.userProfileReducer.avatar,
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
						creatorName: this.props.userProfileReducer.name !== null ? this.props.userProfileReducer.name : this.props.userProfileReducer.id,
						creatorAvatar: this.props.userProfileReducer.avatar,
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
						creatorName: this.props.userProfileReducer.name !== null ? this.props.userProfileReducer.name : this.props.userProfileReducer.id,
						creatorAvatar: this.props.userProfileReducer.avatar,
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
						creatorName: this.props.userProfileReducer.name !== null ? this.props.userProfileReducer.name : this.props.userProfileReducer.id,
						creatorAvatar: this.props.userProfileReducer.avatar,
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
					creatorName: this.props.userProfileReducer.name !== null ? this.props.userProfileReducer.name : this.props.userProfileReducer.id,
					creatorAvatar: this.props.userProfileReducer.avatar,
					createAt: e.createAt,
					operation: e.operation,
					param: {
						value: new TextDecoder("utf-8").decode(param.content)
					}
				}
			}
			list_tweets.push(tweet)
		})
		return list_tweets;
	}
	loadMoreTweets = async () => {
		if (this.state.page !== -1) {
			this.setState({
				loadingState: true,
			});
			await axios.get(API_server + 'transactions/getTweetsInMe/' + this.props.userProfileReducer.id + '&' + this.state.per_page + '&' + this.state.page)
				.then(async rs => {
					const list_tweets = await this.add_tweets(rs.data.data);
					this.props.loadmore_tweets_user(list_tweets)
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
			<MeComponent
				flagMe={this.props.flagMe}
				loadingState={this.state.loadingState}
				nothingToLoad={this.state.nothingToLoad}
				tweetsUser={this.props.tweetsUserReducer}
				loadMore={this.loadMoreTweets}
				userProfileReducer={this.props.userProfileReducer}
				increase_sequence={this.props.increase_sequence}>
			</MeComponent>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		update_tweets_user: (tweets_user) => {
			dispatch(update_tweets_user(tweets_user));
		},
		loadmore_tweets_user: (tweets_user) => {
			dispatch(loadmore_tweets_user(tweets_user));
		},
		increase_sequence: () => {
			dispatch(increase_sequence());
		},
	}
}

const mapStateToProps = (state) => ({
	userProfileReducer: state.userProfileReducer,
	tweetsUserReducer: state.tweetsUserReducer,
	flagMe: state.flagMeReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(MeContainer);
// export default MeContainer;
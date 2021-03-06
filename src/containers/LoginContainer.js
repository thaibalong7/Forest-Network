import React, { Component } from 'react';
import Login from '../components/Login';
import axios from 'axios'
import { Keypair } from 'stellar-base';
import { API_server } from '../config';
import { change_user_info } from '../actions';
import { connect } from 'react-redux';
import Error from "../components/Error";

async function saveSessionStorage(key, value) {
	sessionStorage.setItem(key, value)
}
class LoginContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			isOpenModal: false,
            textNoti: ''
		}
	}
	login = (secret_key) => {
		try {
			const key = Keypair.fromSecret(secret_key);
			const public_key = key.publicKey();
			axios.post(API_server + 'user/login', { public_key: public_key }).then(async rs => {
				if (rs.status === 200) {
					console.log('Login success')
					await saveSessionStorage('secret_key', secret_key);
					this.props.history.push('/home')
					const numOfTweets = await axios.get(API_server + 'transactions/getNumOfTweetsById/' + rs.data.account_info.id)
					const numOfFollower = await axios.get(API_server + 'followings/getNumOfFollower/' + rs.data.account_info.id)
					const numOfFollowed = await axios.get(API_server + 'followings/getNumOfFollowed/' + rs.data.account_info.id)
					this.props.change_user_info({
						id: rs.data.account_info.id,
						name: rs.data.account_info.name,
						avatar: rs.data.account_info.avatar,
						sequence: rs.data.account_info.sequence,
						tweets: numOfTweets.data.number,
						follower: numOfFollower.data.number,
						following: numOfFollowed.data.number,
						bandwidth: rs.data.account_info.bandwidth,
						balance: rs.data.account_info.balance
					})
				}
			}).catch(e => {
				console.log('This account is not exist');
				this.setState({
                    textNoti: 'This account is not exist',
                    isOpenModal: true
                })
			})
		}
		catch (e) {
			console.log('Secret key is invalid')
			this.setState({
				textNoti: 'Secret key is invalid',
				isOpenModal: true
			})
		}
	}
	render() {
		return (
			<div>
				 <Error	isOpenModal={this.state.isOpenModal}
				closeModal={() =>{this.setState({isOpenModal: false})}}
				text={this.state.textNoti}></Error>
				<Login
					flag="login"
					login={this.login}>
				</Login>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => (
	{
		change_user_info: (info) => {
			dispatch(change_user_info(info));
		},
	}
)



export default connect(null, mapDispatchToProps)(LoginContainer);
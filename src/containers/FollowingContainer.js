import React, { Component } from 'react';
import Following from './../components/Following';
import { API_server } from '../config';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";
import { Keypair } from 'stellar-base';
import { load_following } from '../actions';


class FollowingContainer extends Component {

	async componentDidMount() {
		console.log("Following Container");
		let secret_key;
        secret_key = sessionStorage.getItem('secret_key');
        if (secret_key === null) {
            this.props.history.push('/')
		}
		else{
			const key = Keypair.fromSecret(secret_key);
			const public_key = key.publicKey();
			axios.post(API_server + 'user/login', { public_key: public_key }).then(async rs => {
				if (rs.status === 200) {
					console.log('ok')
					const following = await axios.get(API_server + 'followings/getAllFollowings/' + rs.data.account_info.id)
					console.log('Printtttt')
					console.log(following.data.data);
					this.props.load_following(following.data.data);
				}
			}).catch(e => {
				console.log(e);
				this.props.history.push('/');
				sessionStorage.clear();	
			})
		}
	}

	render() {
		console.log("render here");
		console.log(this.props.userProfileReducer);
		console.log(this.props.followingReducer);
		return (
			<div>
				<Following following={this.props.followingReducer}>
				</Following>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		load_following: (following) => {
			dispatch(load_following(following));
		}
	}
}

const mapStateToProps = (state) => ({
	userProfileReducer: state.userProfileReducer,
	followingReducer: state.followingReducer
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowingContainer));
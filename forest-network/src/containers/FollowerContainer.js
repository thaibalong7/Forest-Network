import React, { Component } from 'react';
import Follower from './../components/Follower';
import axios from 'axios';
import { connect } from "react-redux";
import { Keypair } from 'stellar-base';
import { load_follower } from '../actions';
import { API_server } from '../config';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

class FollowerContainer extends Component {
	async componentDidMount() {
		console.log("Follower Container");
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
					const follower = await axios.get(API_server + 'followings/getAllFollowers/' + rs.data.account_info.id)
					console.log('Printtttt')
					console.log(follower.data.data);
					this.props.load_follower(follower.data.data);
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
		console.log(this.props.followerReducer);
		return (
			<div>
				<Follower follower={this.props.followerReducer}>
				</Follower>
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch, props) => {
	return {
		load_follower: (follower) => {
			dispatch(load_follower(follower));
		}
	}
}

const mapStateToProps = (state) => ({
	userProfileReducer: state.userProfileReducer,
	followerReducer: state.followerReducer
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowerContainer));

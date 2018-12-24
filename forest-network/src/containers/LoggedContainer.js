import React, { Component } from 'react';
import HomeContainer from './HomeContainer'
import MeContainer from './MeContainer'
import HistoricalTransactionContainer from './HistoricalTransactionContainer';
import NavigationBar from '../components/Header/NavigationBar';
import { connect } from "react-redux";
import { change_flag_page, change_user_info } from "../actions/index";
import '../styles/Home.css'
import '../index.css'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import axios from 'axios'
import { Keypair } from 'stellar-base';
import { API_server } from '../config';
class LoggedContainer extends Component {
    log_out = () => {
        console.log('log-out');
        this.props.change_flag_page("home");
        let { history } = this.props;
        sessionStorage.clear();
        history.push('/');
    }
    componentDidMount = () => {
        let secret_key;
        secret_key = sessionStorage.getItem('secret_key');
        if (secret_key === null) {
            console.log(secret_key);
            this.props.history.push('/')
        }
        else {
            if (this.props.userProfileReducer.avatar === "" && this.props.userProfileReducer.name === "NoName") {
                const key = Keypair.fromSecret(secret_key);
                const public_key = key.publicKey();
                console.log(public_key)
                axios.post(API_server + 'user/login', { public_key: public_key }).then(async rs => {
                    if (rs.status === 200) {
                        console.log('Login success')
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
                    console.log(e);
                    this.props.history.push('/');
                    sessionStorage.clear();
                })
            }
        }
    }
    render() {
        console.log(this.props);
        // if(this.props.match.url === "/home" || this.props.match.url === "/home/"){
        //     this.props.change_flag_page("home");
        // }
        // if(this.props.match.url === "/home/me" || this.props.match.url === "/home/me/"){
        //     this.props.change_flag_page("me");
        // }
        return (
            <Router>
                <div className="bg-grey-light font-sans">
                    {/* Header */}
                    <NavigationBar flag={this.props.flag} log_out={this.log_out} />


                    <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
                        {/* Left side */}
                        <LeftSide />

                        {/* Middle */}
                        <div className="w-full lg:w-1/2 bg-white mb-4">
                            <Switch>
                                <Route exact path="/home" component={HomeContainer} />
                                <Route path="/home/me" component={MeContainer} />
                                <Route path="/home/history" component={HistoricalTransactionContainer} />
                            </Switch>
                        </div>


                        {/* Right side */}
                        <RightSide />
                    </div>
                </div>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        change_flag_page: (event) => {
            dispatch(change_flag_page(event));
        },
        change_user_info: (info) => {
			dispatch(change_user_info(info));
		},
    }
}
const mapStateToProps = (state) => ({
    userProfileReducer: state.userProfileReducer,

})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedContainer));

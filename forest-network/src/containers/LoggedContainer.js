import React, { Component } from 'react';
import HomeContainer from './HomeContainer'
import MeContainer from './MeContainer'
import HistoricalTransactionContainer from './HistoricalTransactionContainer';
import NavigationBar from '../components/Header/NavigationBar';
import { connect } from "react-redux";
import { change_flag_page} from "../actions/index";
import '../styles/Home.css'
import '../index.css'
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from "react-router-dom";
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';

class LoggedContainer extends Component {
    log_out = () => {
        console.log('log-out');
        this.props.change_flag_page("home");
        let { history } = this.props;
        history.push('/');
    }
    render() {
        console.log(this.props.match.url);
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
                    <NavigationBar flag={this.props.flag} log_out={this.log_out}/>
                    
                    
                    <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
                        {/* Left side */}
                        <LeftSide/>

                        {/* Middle */}
                        <div className="w-full lg:w-1/2 bg-white mb-4">
                            <Switch>
                                <Route exact path="/home" component={HomeContainer} />
                                <Route path="/home/me" component={MeContainer} />
                                <Route path="/home/history" component={HistoricalTransactionContainer} />
                            </Switch>                       
                        </div>


                        {/* Right side */}
                        <RightSide/>
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
    }
}
export default withRouter(connect(null, mapDispatchToProps)(LoggedContainer));

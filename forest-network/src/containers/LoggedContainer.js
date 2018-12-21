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

class LoggedContainer extends Component {
    log_out = () => {
        console.log('log-out');
        this.props.change_flag_page("home");
        let { history } = this.props;
        history.push('/');
    }
    render() {
        return (
            <Router>
                <div className="bg-grey-light font-sans">
                    {/* Header */}
                    <NavigationBar flag={this.props.flag} log_out={this.log_out}/>
                    
                    {/* Left side */}
                    <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
                        <div className="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4">
                        <h2><div className="text-black font-bold no-underline hover:underline">Account Information</div></h2>

                        <div className="mb-4">
                            Team group of tblong, nhhung and lhly
                        </div>

                        <div className="mb-2"><i className="fa fa-map-marker fa-lg text-grey-darker mr-1"></i> Balance:
                        </div>
                        <div className="mb-2"><i className="fa fa-at fa-lg text-grey-darker mr-1"></i>Sequence:
                        </div>


                        <div className="mb-4">
                        <Link to="/home/history" className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full" >Historical Transaction</Link>
                        </div>

                        <div className="mb-4">
                            <button 
                                type="button" 
                                className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full" 
                                data-toggle="modal" 
                                data-target="#myModal">Add Transaction
                            </button>
                            {/* <!-- The Modal --> */}
                            <div 
                                class="modal fade" 
                                id="myModal"
                                data-backdrop="true"
                                data-keyboard="true"
                                tabindex="-1"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                                >
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        <div class="modal-header">
                                            <h4 class="modal-title">Add Transaction</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        <div class="modal-body">
                                            <span>dsdsdsd</span>
                                            <input type="text" className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full" placeholder="Search Twitter" />

                                            <button type="submit" class="btn btn-sucess" data-dismiss="modal">Close</button>

                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    {/* Middle */}
                    <Switch>
                        <Route exact path="/home" component={HomeContainer} />
                        <Route path="/home/me" component={MeContainer} />
                        <Route path="/home/history" component={HistoricalTransactionContainer} />

                    </Switch>

                    {/* Right side */}
                        <div className="w-full lg:w-1/4 pl-4">
                            <div className="bg-white p-3 mb-3">
                                <div>
                                    <span className="text-lg font-bold">Who to follow</span>
                                    <span>&middot;</span>
                                    <span><a href="#" className="text-teal text-xs">Refresh</a></span>
                                    <span>&middot;</span>
                                    <span><a href="#" className="text-teal text-xs">View All</a></span>
                                </div>

                                <div className="flex border-b border-solid border-grey-light">
                                    <div className="py-2">
                                        <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow1.jpg" alt="follow1" className="rounded-full h-12 w-12" /></a>
                                    </div>
                                    <div className="pl-2 py-2 w-full">
                                        <div className="flex justify-between mb-1">
                                            <div>
                                                <a href="#" className="font-bold text-black">Nuxt.js</a> <a href="#" className="text-grey-dark">@nuxt_js</a>
                                            </div>

                                            <div>
                                                <a href="#" className="text-grey hover:text-grey-dark"><i className="fa fa-times"></i></a>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="bg-transparent text-xs hover:bg-teal text-teal font-semibold hover:text-white py-2 px-6 border border-teal hover:border-transparent rounded-full">
                                                Follow
                                    </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-solid border-grey-light">
                                    <div className="py-2">
                                        <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow2.jpg" alt="follow1" className="rounded-full h-12 w-12" /></a>
                                    </div>
                                    <div className="pl-2 py-2 w-full">
                                        <div className="flex justify-between mb-1">
                                            <div>
                                                <a href="#" className="font-bold text-black">Laracon EU</a> <a href="#" className="text-grey-dark">@LaraconEU</a>
                                            </div>

                                            <div>
                                                <a href="#" className="text-grey hover:text-grey-dark"><i className="fa fa-times"></i></a>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="bg-transparent text-xs hover:bg-teal text-teal font-semibold hover:text-white py-2 px-6 border border-teal hover:border-transparent rounded-full">
                                                Follow
                                        </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex border-b border-solid border-grey-light">
                                    <div className="py-2">
                                        <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow3.jpg" alt="follow1" className="rounded-full h-12 w-12" /></a>
                                    </div>
                                    <div className="pl-2 py-2 w-full">
                                        <div className="flex justify-between mb-1">
                                            <div>
                                                <a href="#" className="font-bold text-black">Laracon US</a> <a href="#" className="text-grey-dark">@LaraconUS</a>
                                            </div>

                                            <div>
                                                <a href="#" className="text-grey hover:text-grey-dark"><i className="fa fa-times"></i></a>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="bg-transparent text-xs hover:bg-teal text-teal font-semibold hover:text-white py-2 px-6 border border-teal hover:border-transparent rounded-full">
                                                Follow
                                        </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex border-b border-solid border-grey-light">
                                    <div className="py-4">
                                        <a href="#" className=" p-1"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_outlook.png" alt="follow1" className="rounded h-6 w-6" /></a>
                                    </div>
                                    <div className="pl-2 py-2 w-full">
                                        <div className="flex justify-between">
                                            <div>
                                                <a href="#" className="font-bold text-black">Find people you know</a>
                                            </div>
                                        </div>
                                        <div className="text-xs">
                                            Import your contacts from Outlook
                                    </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <a href="#" className="text-teal text-xs">Connect other address book</a>
                                </div>
                            </div>

                            <div className="bg-white p-3 mb-3">
                                <div className="mb-3">
                                    <span className="text-lg font-bold">Trends for you</span>
                                    <span>&middot;</span>
                                    <span><a href="#" className="text-teal text-xs">Change</a></span>
                                </div>

                                <div className="mb-3 leading-tight">
                                    <div><a href="#" className="text-teal font-bold">Happy New Year</a></div>
                                    <div><a href="#" className="text-grey-dark text-xs">645K Tweets</a></div>
                                </div>

                                <div className="mb-3 leading-tight">
                                    <div><a href="#" className="text-teal font-bold">Happy 2018</a></div>
                                    <div><a href="#" className="text-grey-dark text-xs">NYE 2018 Celebrations</a></div>
                                </div>

                                <div className="mb-3 leading-tight">
                                    <div><a href="#" className="text-teal font-bold">#ByeBye2017</a></div>
                                    <div><a href="#" className="text-grey-dark text-xs">21.7K Tweets</a></div>
                                </div>

                                <div className="mb-3 leading-tight">
                                    <div><a href="#" className="text-teal font-bold">#SomeHashTag</a></div>
                                    <div><a href="#" className="text-grey-dark text-xs">45K Tweets</a></div>
                                </div>

                                <div className="mb-3 leading-tight">
                                    <div><a href="#" className="text-teal font-bold">Something Trending</a></div>
                                    <div><a href="#" className="text-grey-dark text-xs">36K Tweets</a></div>
                                </div>

                                <div className="mb-3 leading-tight">
                                    <div><a href="#" className="text-teal font-bold">#ColdAF</a></div>
                                    <div><a href="#" className="text-grey-dark text-xs">100K Tweets</a></div>
                                </div>

                            </div>

                            <div className="mb-3 text-xs">
                                <span className="mr-2"><a href="#" className="text-grey-darker">&copy; 2018 Twitter</a></span>
                                <span className="mr-2"><a href="#" className="text-grey-darker">About</a></span>
                                <span className="mr-2"><a href="#" className="text-grey-darker">Help Center</a></span>
                                <span className="mr-2"><a href="#" className="text-grey-darker">Terms</a></span>
                                <span className="mr-2"><a href="#" className="text-grey-darker">Privacy policy</a></span>
                                <span className="mr-2"><a href="#" className="text-grey-darker">Cookies</a></span>
                                <span className="mr-2"><a href="#" className="text-grey-darker">Ads info</a></span>
                            </div>
                        </div>
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

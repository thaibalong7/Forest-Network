import React, { Component } from 'react';
import '../styles/Home.css'
import '../index.css'
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from "react-router-dom";

class LeftSide extends Component {
    render() {
        return (
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
                                    <form>
                                        <div>
                                            <h3>Public Key: </h3>
                                            <input 
                                                type="text" 
                                                className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full" />
                                        </div>

                                        <div>
                                            <h3>Amount: </h3>
                                            <input type="text" className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full"/>
                                        </div>
                                        <div>
                                            <span>Please type correct amount.</span>
                                        </div>
                                        <button type="submit" class="btn btn-sucess" data-dismiss="modal">SUBMIT</button>
                                    </form>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (LeftSide);
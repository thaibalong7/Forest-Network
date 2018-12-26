import React, { Component } from 'react';
import '../styles/Home.css'
import '../index.css'
import '../styles/style.css'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { sentUpdateNameTransaction, sendPaymentTransaction } from '../lib/transaction/sendTransaction';
import { increase_sequence, change_name } from '../actions';
class LeftSide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameToChange: props.userProfileReducer.name,
            amountToSent: 0,
            accountToSent: ''
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.userProfileReducer.name !== prevProps.userProfileReducer.name) {
            this.setState({ nameToChange: this.props.userProfileReducer.name })
        }
    }
    ChangeName = (e) => {
        this.setState({ nameToChange: e.target.value })
    }
    UpdateName = () => {
        sentUpdateNameTransaction(this.state.nameToChange, this.props.userProfileReducer.sequence, (rs) => {
            if (typeof rs === 'undefined') {
                console.log('Fail to update name')
            }
            else {
                if (rs.height === '0') {
                    console.log(rs.check_tx.log)
                }
                else {
                    this.props.change_name(this.state.nameToChange)
                    console.log('Update name success')
                    this.props.increase_sequence()
                }
            }

        })
    }
    SentAmount = () => {
        sendPaymentTransaction(this.state.accountToSent, this.state.amountToSent, this.props.userProfileReducer.sequence, rs => {
            if (typeof rs === 'undefined') {
                console.log('Fail to sent')
            }
            else {
                if (rs.height === '0') {
                    console.log(rs.check_tx.log)
                }
                else {
                    console.log('Sent amount success')
                    this.setState({
                        amountToSent: 0,
                        accountToSent: ''
                    })
                    this.props.increase_sequence()
                }
            }
        })
    }
    render() {
        var Balance = "Balance: " + this.props.userProfileReducer.balance;
        var Sequence = "Sequence: " + this.props.userProfileReducer.sequence;
        var Bandwidth = "Bandwidth: " + this.props.userProfileReducer.bandwidth
        return (
            <div className="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4">
                <div>
                    <h2><div
                        className="text-black font-bold no-underline hover:underline"
                        data-toggle="modal"
                        data-target="#modalchangename"
                    >{this.props.userProfileReducer.name}</div></h2>


                </div>
                <div className="mb-4">
                    Team group of tblong, nhhung and lhly
                </div>

                <div className="mb-4"><i className="fa fa fa-money fa-lg text-grey-darker mr-1"></i>{Balance}
                </div>
                <div className="mb-4"><i className="fa fa-code fa-lg text-grey-darker mr-1"></i>{Sequence}
                </div>
                <div className="mb-4"><i className="fa fa-battery-3 fa-lg text-grey-darker mr-1"></i>{Bandwidth}
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

                    <div className="modal fade"
                        id="modalchangename"
                        data-backdrop="true"
                        data-keyboard="true"
                        tabIndex="1"
                        aria-labelledby="myModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog position">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Update name</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body">
                                    <form>
                                        <div>
                                            <h3>name: </h3>
                                            <input
                                                type="text"
                                                className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full"
                                                value={this.state.nameToChange}
                                                onChange={this.ChangeName}
                                            />
                                        </div>
                                        <button className="style" data-dismiss="modal" onClick={this.UpdateName}>Change</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade"
                        id="myModal"
                        data-backdrop="true"
                        data-keyboard="true"
                        tabIndex="-1"
                        aria-labelledby="myModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Add Transaction</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body">
                                    <form>
                                        <div>
                                            <h3>Public Key: </h3>
                                            <input
                                                type="text"
                                                className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full"
                                                value={this.state.accountToSent}
                                                onChange={e => { this.setState({ accountToSent: e.target.value }) }}
                                            />
                                        </div>

                                        <div>
                                            <h3>Amount: </h3>
                                            <input type="number" value={this.state.amountToSent}
                                                className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full"
                                                onChange={event => this.setState({ amountToSent: event.target.value.replace(/\D/, '') })} />
                                        </div>
                                        <div>
                                            <span>Please type correct amount.</span>
                                        </div>
                                        <button className="btn btn-sucess" data-dismiss="modal" onClick={this.SentAmount}>SUBMIT</button>
                                    </form>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    userProfileReducer: state.userProfileReducer,
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        increase_sequence: () => {
            dispatch(increase_sequence());
        },
        change_name: (name) => {
            dispatch(change_name(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
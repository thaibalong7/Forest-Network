import React, { Component } from 'react';
import '../styles/Home.css';
import '../index.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import {Error} from "./Error";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secret_key: '',
    };
}

    onChangeSecretKey = (e) => {
        let target = e.target;
        let value = target.value;
        this.setState({
            secret_key: value
        });
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.login(this.state.secret_key);
        }
    }
    render() {
        return (
            <div>
                <div className="container-login100">
                    <div>
                        <style>
                        </style>
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src="images/img-01.png" alt="IMG" />
                        </div>
                        <div className="login100-form validate-form">
                            <span className="login100-form-title">
                                Member Login
                            </span>
                            <div className="wrap-input100 validate-input" >
                                <input required="required"
                                    className="input100"
                                    type="text"
                                    name="secret_key" 
                                    id="secret_key" 
                                    placeholder="Enter secret key"
                                    value={this.state.secret_key}
                                    onChange={this.onChangeSecretKey}
                                    onKeyPress={this.handleKeyPress}
                                    
                                />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>

                            </div>
                            <div className="container-login100-form-btn">
                                <button 
                                    className="login100-form-btn" 
                                    onClick={() => this.props.login(this.state.secret_key)}>
                                    Login
                                </button>
                            </div>
                            <div className="text-center p-t-136">
                                <Link to='/create' style={{ color: 'black' }}>
                                    <h3>
                                        <div>
                                            Create your Account
							                <i className="fa fa-long-arrow-right m-l-5"></i>
                                        </div>
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
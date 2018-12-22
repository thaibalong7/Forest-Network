import React, { Component } from 'react';
import '../styles/Home.css';
import '../index.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


class Login extends Component {
    event_click() {
        
    }

    event_click_link_create()
    {
        
    }

    render() {
        console.log("login");
        return (
            <div>
                <div className="container-login100">
                    <div>
                        <style>
                        </style>
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src="images/img-01.png" alt="IMG" />
                        </div>
                        <form className="login100-form validate-form">
                            <span className="login100-form-title">
                                Member Login
                            </span>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="text" name="pass" placeholder="Enter private key" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="container-login100-form-btn">
                                <Link to = "/home">
                                    <button className="login100-form-btn" >
                                        Login
                                    </button>
                                </Link>
                            </div>

                            <div className="text-center p-t-136">
                                <Link to = '/create' style = {{color: 'black'}}>
                                    <h3>
						                <text>
							                Create your Account
							                <i className="fa fa-long-arrow-right m-l-5"></i>
						                </text>
                                    </h3>
                                </Link>
					        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
import React, { Component } from 'react';
import '../styles/Home.css';
import '../index.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class CreateAcount extends Component {
    render() {
      return (
        <div className="limiter">
          <div className="container-login100">
              <div className="wrap-login100 box-shadow-main">
                  <div className="login100-pic js-tilt" data-tilt>
                      <img src="images/img-01.png" alt="IMG"/>
                  </div>
  
                  <form className="login100-form validate-form">
                      <span className="login100-form-title">
                          CREATE ACOUNT
                      </span>
  
                      <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                          <input className="input100" type="text" name="email-phonenumber" placeholder="Email - phone number"/>
                          <span className="focus-input100"></span>
                          <span className="symbol-input100">
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                          </span>
                      </div>
  
  
                      <div className="wrap-input100 validate-input" data-validate = "Password is required">
                          <input className="input100" type="password" name="pass" placeholder="Password"/>
                          <span className="focus-input100"></span>
                          <span className="symbol-input100">
                              <i className="fa fa-lock" aria-hidden="true"></i>
                          </span>
                      </div>
  
                      <div className="wrap-input100 validate-input" data-validate = "Password is required">
                          <input className="input100" type="text" name="privatekey" placeholder="Private Key"/>
                          <span className="focus-input100"></span>
                          <span className="symbol-input100">
                              <i className="fa fa-lock" aria-hidden="true"></i>
                          </span>
                      </div>
                      
                      <div className="container-login100-form-btn">
                        <Link to = "/">
                          <button className="login100-form-btn">
                              CREATE
                          </button>
                        </Link>
                      </div>
  
                      <div className="text-center p-t-136">
                          <span className="txt1">
                              Forgot
                          </span>
                          <a className="txt2" href="/#" >
                                Password/Private Key
                            <i className="fa fa-long-arrow-right m-l-5"></i>
                          </a>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  
      );
    }
  }
  
  export default CreateAcount;
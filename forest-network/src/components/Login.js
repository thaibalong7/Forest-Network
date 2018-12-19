import React, { Component } from 'react';
import '../styles/Home.css';
import '../index.css';


class Login extends Component
{
    render()
    { 
        console.log("login");
        return(
            <div className = "center-me mb-4">
                <div className = "rcorners12">
                    <div className = "pos">
                        <h1><text className = "text">Member Login</text></h1>
                        <h3><input type="text" className="rcorners11" placeholder="Enter private key" /></h3>
                        <h3><button className="btn-success rcorners11_noshadow">LOGIN</button></h3>
                    </div>
                </div>
            </div>
        );
    }
}


export default (Login);
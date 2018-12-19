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
                <h3><input type="text" className=" rcorners11" placeholder="Enter private key" /></h3>
                <h3><button className="btn-danger rcorners11_noshadow">Log in</button></h3>
            </div>
        );
    }
}


export default (Login);
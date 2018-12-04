import React, { Component } from 'react';
import '../styles/Home.css'
import '../index.css'
//import { BrowserRouter as Link, withRouter } from "react-router-dom";
import NavigationBar from './Header/NavigationBar';
import User from './Header/User';
import Me from './MeComponent'

class Home extends Component {

    render() {
        return (
            <div className="bg-grey-light font-sans">
                {/* Begin header*/}
                <NavigationBar/>

                <User/>
                <Me></Me>

            </div>
        );
    }
}

export default (Home);
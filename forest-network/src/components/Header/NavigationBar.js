import React, { Component } from 'react';
import '../../styles/Home.css';
import '../../index.css';

class NavigationBar extends Component {
	render() {
        var componentSelected = "text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal border-teal no-underline";
        var componentUnselected = "text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline";
        var homeStyles, notiStyles, meStyles;
        if(this.props.flag ==="home"){
            homeStyles = componentSelected;
            notiStyles = meStyles = componentUnselected;
        }
        else if(this.props.flag ==="me"){
            meStyles = componentSelected;
            notiStyles = homeStyles = componentUnselected;
        }
        else{
            notiStyles = componentSelected;
            meStyles = homeStyles = componentUnselected;
        }
        return (
            <div className="bg-white">
                <div className="container mx-auto flex flex-col lg:flex-row items-center py-2">
                    <nav className="w-full lg:w-2/5">
                        <a href="/home" className={homeStyles}><i className="fa fa-home fa-lg"></i>  Home</a>
                        {/* <a href="#" className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"><i className="fa fa-bolt fa-lg"></i> Moments</a> */}
                        <a href="/notifications" className={notiStyles}><i className="fa fa-bell fa-lg"></i>  Notifications</a>
                        <a href="/me" className={meStyles}><i className="fa fa-user fa-lg"></i>  Me   </a>
                    </nav>
                    <div className="w-full lg:w-1/5 text-center my-4 lg:my-0"><a href="#"><i className="fa fa-twitter fa-lg text-blue"></i></a></div>
                    <div className="w-full lg:w-2/5 flex lg:justify-end">
                        <div className="mr-4 relative">
                            <input type="text" className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full" placeholder="Search Twitter" />
                            <span className="flex items-center absolute pin-r pin-y mr-3"><i className="fa fa-search text-grey"></i></span>
                        </div>
                        <div className="mr-4"><a href="#"><img src="https://lh3.googleusercontent.com/-2TFVM9adrO4/V_0GGJaxVtI/AAAAAAAACl0/ljqI4V2hMYwCqyxjEjsMcvmyvZinpfECQCEwYBhgL/w140-h139-p/28846486360_5541b15451_o.jpg" alt="avatar" className="h-8 w-8 rounded-full" /></a></div>
                        <div><button className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full">Log-out</button></div>
                    </div>
                </div>
            </div>
		);
	}
}

export default NavigationBar;
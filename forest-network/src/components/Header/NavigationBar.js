import React, { Component } from 'react';
import '../../styles/Home.css';
import '../../index.css';
import { connect } from 'react-redux'
class NavigationBar extends Component {
	render() {
		return (
            <div className="bg-white">
                <div className="container mx-auto flex flex-col lg:flex-row items-center py-2">
                    <nav className="w-full lg:w-2/5">
                        <a href="#" className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"><i className="fa fa-home fa-lg"></i>  Home</a>
                        {/* <a href="#" className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"><i className="fa fa-bolt fa-lg"></i> Moments</a> */}
                        <a href="#" className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"><i className="fa fa-bell fa-lg"></i>  Notifications</a>
                        <a href="#" className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal border-teal no-underline"><i className="fa fa-user fa-lg"></i>  Me   </a>
                    </nav>
                    <div className="w-full lg:w-1/5 text-center my-4 lg:my-0"><a href="#"><i className="fa fa-twitter fa-lg text-blue"></i></a></div>
                    <div className="w-full lg:w-2/5 flex lg:justify-end">
                        <div className="mr-4 relative">
                            <input type="text" className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full" placeholder="Search Twitter" />
                            <span className="flex items-center absolute pin-r pin-y mr-3"><i className="fa fa-search text-grey"></i></span>
                        </div>
                        <div className="mr-4"><a href="#"><img src={this.props.userProfileReducer.avatarUrl} alt="avatar" className="h-8 w-8 rounded-full" /></a></div>
                        <div><button className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full">Log-out</button></div>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = (state) => ({
    userProfileReducer: state.userProfileReducer
})
export default connect(mapStateToProps, null)(NavigationBar);
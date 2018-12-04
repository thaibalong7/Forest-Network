import React, { Component } from 'react';
import '../../styles/Home.css';
import '../../index.css';
import { connect } from 'react-redux'
class User extends Component {
    // constructor(props) {
    //     super(props);
       
    // }
    render() {
        return (
            <div>
                <div className="hero h-64 bg-cover h-60"></div>
                <div className="bg-white shadow">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">
                        <div className="w-full lg:w-1/5">
                            <img src={this.props.userProfileReducer.avatarUrl}
                                alt="logo" className="rounded-full h-48 w-48 lg:absolute lg:pin-l lg:pin-t lg:-mt-24" />
                        </div>
                        <div className="w-full lg:w-1/1">
                            <ul className="list-reset flex">
                                <li className="text-center py-3 px-2 border-b-2 border-solid border-transparent">
                                    <a href="#" className="text-grey-darker no-underline hover:no-underline">
                                        <div className="text-sm font-bold tracking-tight mb-1">Tweets</div>
                                        <div className="text-lg tracking-tight font-bold text-teal">{this.props.userProfileReducer.tweets}</div>
                                    </a>
                                </li>
                                <li className="text-center py-3 px-2 border-b-2 border-solid border-transparent">
                                    <a href="#" className="text-grey-darker no-underline hover:no-underline">
                                        <div className="text-sm font-bold tracking-tight mb-1">Following</div>
                                        <div className="text-lg tracking-tight font-bold text-teal">{this.props.userProfileReducer.following}</div>
                                    </a>
                                </li>
                                <li className="text-center py-3 px-2 border-b-2 border-solid border-transparent">
                                    <a href="#" className="text-grey-darker no-underline hover:no-underline">
                                        <div className="text-sm font-bold tracking-tight mb-1">Followers</div>
                                        <div className="text-lg tracking-tight font-bold text-teal">{this.props.userProfileReducer.follower}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="w-full lg:w-1/4 flex my-4 lg:my-0 lg:justify-end items-center">
                        <div className="mr-6">
                            <button class="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full">Following</button>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark"><i className="fa fa-ellipsis-v fa-lg"></i></a>
                        </div>
                    </div> */}
                    </div>
                    {/* <!-- End Header --> */}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    userProfileReducer: state.userProfileReducer
})


export default connect(mapStateToProps, null)(User);
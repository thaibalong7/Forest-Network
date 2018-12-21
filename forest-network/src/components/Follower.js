import React, { Component } from 'react';
import '../styles/Home.css';
import '../index.css';
import "../styles/Follow.css";

import { BrowserRouter as Link, withRouter } from "react-router-dom";

class Follower extends Component {
    render() {
        console.log("Followerrrrrrr");
        return (
            <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
                {/* Middle */}
                <div className="follower-main w-full lg:w-1/2 bg-white mb-4">
                    {/* Title */}
                    <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
                        <a href="#" className="text-black mr-6 no-underline hover-underline">Follower</a>
                    </div>

                    {/* User */}
                    <div className="flex border-b border-solid border-grey-light">
                        <div className="w-1/8 text-right pl-3 pt-3">
                            <div><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_tailwind.jpg" alt="avatar" className="rounded-full h-12 w-12 mr-2" /></a></div>
                        </div>

                        <div className="w-7/8 p-3 pl-0">
                            <div className="flex justify-between">
                                <div>
                                    <span className="font-bold"><a href="#" className="text-black">Tailwind CSS</a></span>
                                </div>
                                <div>
                                    <button class="btn-follower">Follower</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex border-b border-solid border-grey-light">
                        <div className="w-1/8 text-right pl-3 pt-3">
                            <div><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_adam.jpg" alt="avatar" className="rounded-full h-12 w-12 mr-2" /></a></div>
                        </div>

                        <div className="w-7/8 p-3 pl-0">
                            <div className="flex justify-between">
                                <div>
                                    <span className="font-bold"><a href="#" className="text-black">Tailwind CSS</a></span>
                                </div>
                                <div>
                                    <button class="btn-follower">Follower</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex border-b border-solid border-grey-light">
                        <div className="w-1/8 text-right pl-3 pt-3">
                            <div><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_egghead.jpg" alt="avatar" className="rounded-full h-12 w-12 mr-2" /></a></div>
                        </div>

                        <div className="w-7/8 p-3 pl-0">
                            <div className="flex justify-between">
                                <div>
                                    <span className="font-bold"><a href="#" className="text-black">Tailwind CSS</a></span>
                                </div>
                                <div>
                                    <button className="btn-follower">Follower</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            );
    }
}

export default withRouter(Follower);
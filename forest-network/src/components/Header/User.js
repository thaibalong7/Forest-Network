import React, { Component } from 'react';
import '../../styles/Home.css';
import '../../index.css';

class User extends Component {
	render() {
		return (
            <div className="bg-white shadow">
                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">
                    <div className="w-full lg:w-1/5">
                        <img src="https://lh3.googleusercontent.com/-2TFVM9adrO4/V_0GGJaxVtI/AAAAAAAACl0/ljqI4V2hMYwCqyxjEjsMcvmyvZinpfECQCEwYBhgL/w140-h139-p/28846486360_5541b15451_o.jpg"
                            alt="logo" className="rounded-full h-48 w-48 lg:absolute lg:pin-l lg:pin-t lg:-mt-24" />
                    </div>
                    <div className="w-full lg:w-1/1">
                        <ul className="list-reset flex">
                            <li className="text-center py-3 px-2 border-b-2 border-solid border-transparent">
                                <a href="#" className="text-grey-darker no-underline hover:no-underline">
                                    <div className="text-sm font-bold tracking-tight mb-1">Tweets</div>
                                    <div className="text-lg tracking-tight font-bold text-teal">60</div>
                                </a>
                            </li>
                            <li className="text-center py-3 px-2 border-b-2 border-solid border-transparent">
                                <a href="#" className="text-grey-darker no-underline hover:no-underline">
                                    <div className="text-sm font-bold tracking-tight mb-1">Following</div>
                                    <div className="text-lg tracking-tight font-bold text-teal">4</div>
                                </a>
                            </li>
                            <li className="text-center py-3 px-2 border-b-2 border-solid border-transparent">
                                <a href="#" className="text-grey-darker no-underline hover:no-underline">
                                    <div className="text-sm font-bold tracking-tight mb-1">Followers</div>
                                    <div className="text-lg tracking-tight font-bold text-teal">3,810</div>
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
		);
	}
}

export default User;
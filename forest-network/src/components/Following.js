import React, { Component } from 'react';
import '../styles/Home.css'
import '../index.css'
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class Following extends Component {
    render() {
        console.log("Followingggggggg");
        return (
                <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
                    <div className="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4">
                        <h2><div className="text-black font-bold no-underline hover:underline">tblong</div></h2>
                        <div className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">@tblong</a></div>

                        {/* <div className="mb-4">
                            A utility-first CSS framework for rapid UI development. By <a href="#" className="text-teal no-underline hover:underline">@adamwathan</a>, <a href="#" className="text-teal no-underline hover:underline">@reinink</a>, <a href="#" className="text-teal no-underline hover:underline">@davidhemphill</a>, and <a href="#" className="text-teal no-underline hover:underline">@steveschoger</a>.
                        </div> */}
                        <div className="mb-4">
                            Team group of tblong, nhhung and lhly
                        </div>

                        <div className="mb-2"><i className="fa fa-map-marker fa-lg text-grey-darker mr-1"></i><a href="#" className="text-teal no-underline hover:underline"> Ho Chi Minh City</a></div>
                        <div className="mb-2"><i className="fa fa-at fa-lg text-grey-darker mr-1"></i><a href="#" className="text-teal no-underline hover:underline">thaibalong7@gmail.com</a></div>
                        <div className="mb-4"><i className="fa fa-clock-o fa-lg text-grey-darker mr-1"></i><a href="#" className="text-teal no-underline hover:underline">4th Dec, 2018</a></div>
                      
                        {/* <div className="mb-4">
                            <button className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full w-full h-10">Tweet to Tailwind CSS</button>
                        </div> */}

                        <div className="mb-4"><i className="fa fa-user fa-lg text-grey-dark mr-1"></i><a href="#" className="text-teal no-underline hover:underline">27 Followers you know</a></div>

                        <div className="mb-4">
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower01.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower02.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower03.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower04.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower05.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower06.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower07.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower08.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower09.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower10.jpg" alt="avatar" className="rounded-full h-12 w-12" /></a>
                        </div>

                        <div className="mb-4"><i className="fa fa-picture-o fa-lg text-grey-dark mr-1"></i><a href="#" className="text-teal">Photos and videos</a></div>

                        <div className="mb-4">
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_photo1.jpg" alt="photo" className="h-20 w-20 mr-1 mb-1" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_photo2.jpg" alt="photo" className="h-20 w-20 mr-1 mb-1" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_photo3.jpg" alt="photo" className="h-20 w-20 mr-1 mb-1" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_photo4.jpg" alt="photo" className="h-20 w-20 mr-1 mb-1" /></a>
                            <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_photo5.jpg" alt="photo" className="h-20 w-20 mr-1 mb-1" /></a>
                        </div>
                    </div>

                    {/* Middle */}
                    <div className="w-full lg:w-1/2 bg-white mb-4">
                        {/* Title */}
                        <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
                            <a href="#" className="text-black mr-6 no-underline hover-underline">Following</a>
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
                                        <button class="btn-following">Following</button>
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
                                        <button class="btn-following">Following</button>
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
                                        <button class="btn-following">Following</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4 pl-4">
                        <div className="bg-white p-3 mb-3">
                            <div>
                                <span className="text-lg font-bold">Who to follow</span>
                                <span>&middot;</span>
                                <span><a href="#" className="text-teal text-xs">Refresh</a></span>
                                <span>&middot;</span>
                                <span><a href="#" className="text-teal text-xs">View All</a></span>
                            </div>

                            <div className="flex border-b border-solid border-grey-light">
                                <div className="py-2">
                                    <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow1.jpg" alt="follow1" className="rounded-full h-12 w-12" /></a>
                                </div>
                                <div className="pl-2 py-2 w-full">
                                    <div className="flex justify-between mb-1">
                                        <div>
                                            <a href="#" className="font-bold text-black">Nuxt.js</a> <a href="#" className="text-grey-dark">@nuxt_js</a>
                                        </div>

                                        <div>
                                            <a href="#" className="text-grey hover:text-grey-dark"><i className="fa fa-times"></i></a>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-transparent text-xs hover:bg-teal text-teal font-semibold hover:text-white py-2 px-6 border border-teal hover:border-transparent rounded-full">
                                            Follow
                                </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b border-solid border-grey-light">
                                <div className="py-2">
                                    <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow2.jpg" alt="follow1" className="rounded-full h-12 w-12" /></a>
                                </div>
                                <div className="pl-2 py-2 w-full">
                                    <div className="flex justify-between mb-1">
                                        <div>
                                            <a href="#" className="font-bold text-black">Laracon EU</a> <a href="#" className="text-grey-dark">@LaraconEU</a>
                                        </div>

                                        <div>
                                            <a href="#" className="text-grey hover:text-grey-dark"><i className="fa fa-times"></i></a>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-transparent text-xs hover:bg-teal text-teal font-semibold hover:text-white py-2 px-6 border border-teal hover:border-transparent rounded-full">
                                            Follow
                                    </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex border-b border-solid border-grey-light">
                                <div className="py-2">
                                    <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow3.jpg" alt="follow1" className="rounded-full h-12 w-12" /></a>
                                </div>
                                <div className="pl-2 py-2 w-full">
                                    <div className="flex justify-between mb-1">
                                        <div>
                                            <a href="#" className="font-bold text-black">Laracon US</a> <a href="#" className="text-grey-dark">@LaraconUS</a>
                                        </div>

                                        <div>
                                            <a href="#" className="text-grey hover:text-grey-dark"><i className="fa fa-times"></i></a>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-transparent text-xs hover:bg-teal text-teal font-semibold hover:text-white py-2 px-6 border border-teal hover:border-transparent rounded-full">
                                            Follow
                                    </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex border-b border-solid border-grey-light">
                                <div className="py-4">
                                    <a href="#" className=" p-1"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_outlook.png" alt="follow1" className="rounded h-6 w-6" /></a>
                                </div>
                                <div className="pl-2 py-2 w-full">
                                    <div className="flex justify-between">
                                        <div>
                                            <a href="#" className="font-bold text-black">Find people you know</a>
                                        </div>
                                    </div>
                                    <div className="text-xs">
                                        Import your contacts from Outlook
                                </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <a href="#" className="text-teal text-xs">Connect other address book</a>
                            </div>
                        </div>

                        <div className="bg-white p-3 mb-3">
                            <div className="mb-3">
                                <span className="text-lg font-bold">Trends for you</span>
                                <span>&middot;</span>
                                <span><a href="#" className="text-teal text-xs">Change</a></span>
                            </div>

                            <div className="mb-3 leading-tight">
                                <div><a href="#" className="text-teal font-bold">Happy New Year</a></div>
                                <div><a href="#" className="text-grey-dark text-xs">645K Tweets</a></div>
                            </div>

                            <div className="mb-3 leading-tight">
                                <div><a href="#" className="text-teal font-bold">Happy 2018</a></div>
                                <div><a href="#" className="text-grey-dark text-xs">NYE 2018 Celebrations</a></div>
                            </div>

                            <div className="mb-3 leading-tight">
                                <div><a href="#" className="text-teal font-bold">#ByeBye2017</a></div>
                                <div><a href="#" className="text-grey-dark text-xs">21.7K Tweets</a></div>
                            </div>

                            <div className="mb-3 leading-tight">
                                <div><a href="#" className="text-teal font-bold">#SomeHashTag</a></div>
                                <div><a href="#" className="text-grey-dark text-xs">45K Tweets</a></div>
                            </div>

                            <div className="mb-3 leading-tight">
                                <div><a href="#" className="text-teal font-bold">Something Trending</a></div>
                                <div><a href="#" className="text-grey-dark text-xs">36K Tweets</a></div>
                            </div>

                            <div className="mb-3 leading-tight">
                                <div><a href="#" className="text-teal font-bold">#ColdAF</a></div>
                                <div><a href="#" className="text-grey-dark text-xs">100K Tweets</a></div>
                            </div>

                        </div>

                        <div className="mb-3 text-xs">
                            <span className="mr-2"><a href="#" className="text-grey-darker">&copy; 2018 Twitter</a></span>
                            <span className="mr-2"><a href="#" className="text-grey-darker">About</a></span>
                            <span className="mr-2"><a href="#" className="text-grey-darker">Help Center</a></span>
                            <span className="mr-2"><a href="#" className="text-grey-darker">Terms</a></span>
                            <span className="mr-2"><a href="#" className="text-grey-darker">Privacy policy</a></span>
                            <span className="mr-2"><a href="#" className="text-grey-darker">Cookies</a></span>
                            <span className="mr-2"><a href="#" className="text-grey-darker">Ads info</a></span>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter(Following);
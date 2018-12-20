import React, { Component } from 'react';
import '../styles/Home.css';
import '../index.css';
import { connect } from 'react-redux';
import FollowingContainer from '../containers/FollowingContainer';
import FollowerContainer from '../containers/FollowerContainer';

function renderTweets(props) {
    //dựa vào danh sách tweets có trong props để render
    return (
        <div>
            <a href="#" className="text-black mr-6 no-underline hover-underline">Tweets</a>
            
            <div className="flex border-b border-solid border-grey-light">
                <div className="w-1/8 text-right pl-3 pt-3">
                    <div><i className="fa fa-thumb-tack text-teal mr-2"></i></div>
                    <div><a href="#"><img src={props.userProfileReducer.avatarUrl} alt="avatar" className="rounded-full h-12 w-12 mr-2" /></a></div>
                </div>
                <div className="w-7/8 p-3 pl-0">
                    <div className="text-xs text-grey-dark">Pinned Tweet</div>
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold"><a href="#" className="text-black">{props.userProfileReducer.name}</a></span>
                            <span className="text-grey-dark">@{props.userProfileReducer.link}</span>
                            <span className="text-grey-dark">&middot;</span>
                            <span className="text-grey-dark">04 Dec 2018</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>

                    <div>
                        <div className="mb-4">
                            <p className="mb-6">🎉 Tailwind CSS v0.4.0 is out!</p>
                            <p className="mb-6">Makes `apply` more useful when using !important utilities, and includes an improved default color palette:</p>
                            <p className="mb-4"><a href="#" className="text-teal">github.com/tailwindcss/ta...</a></p>
                            <p><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet1.jpg" alt="tweet image" className="border border-solid border-grey-light rounded-sm" /></a></p>
                        </div>
                    </div>

                    <div className="pb-2">
                        <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 9</a></span>
                        <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-green"><i className="fa fa-retweet fa-lg mr-2"></i> 29</a></span>
                        <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 135</a></span>
                        <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-teal"><i className="fa fa-envelope fa-lg mr-2"></i></a></span>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-solid border-grey-light">
                <div className="w-1/8 text-right pl-3 pt-3">
                    <div><i className="fa fa-retweet text-grey-dark mr-2"></i></div>
                    <div><a href="#"><img src={props.userProfileReducer.avatarUrl} alt="avatar" className="rounded-full h-12 w-12 mr-2" /></a></div>
                </div>

                <div className="w-7/8 p-3 pl-0">
                    <div className="text-xs text-grey-dark">Tailwind CSS Retweeted</div>
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold"><a href="#" className="text-black">{props.userProfileReducer.name}</a></span>
                            <span className="text-grey-dark">@{props.userProfileReducer.link}</span>
                            <span className="text-grey-dark">&middot;</span>
                            <span className="text-grey-dark">01 Dec 2018</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="mb-6">💥 Check out this Slack clone built with <a href="#" className="text-teal">@tailwindcss</a> using no custom CSS and just the default configuration:</p>
                            <p className="mb-4"><a href="#" className="text-teal">https://codepen.io/adamwathan/pen/JOQWVa...</a></p>
                            <p className="mb-6">(based on some work <a href="#" className="text-teal">@Killgt</a> started for <a href="#" className="text-teal">tailwindcomponents.com</a> !)</p>
                            <p><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet2.jpg" alt="tweet image" className="border border-solid border-grey-light rounded-sm" /></a></p>
                        </div>
                        <div className="pb-2">
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 19</a></span>
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-green"><i className="fa fa-retweet fa-lg mr-2"></i> 56</a></span>
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 247</a></span>
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-teal"><i className="fa fa-envelope fa-lg mr-2"></i></a></span>
                        </div>

                        <div><a href="#" className="text-teal">Show this thread</a></div>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-solid border-grey-light">
                <div className="w-1/8 text-right pl-3 pt-3">
                    <div><a href="#"><img src={props.userProfileReducer.avatarUrl} alt="avatar" className="rounded-full h-12 w-12 mr-2" /></a></div>
                </div>

                <div className="w-7/8 p-3 pl-0">
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold"><a href="#" className="text-black">Tailwind CSS</a></span>
                            <span className="text-grey-dark">@tailwindcss</span>
                            <span className="text-grey-dark">&middot;</span>
                            <span className="text-grey-dark">1 Dec 2017</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="mb-6">🎉 Tailwind CSS v0.3.0 is here!</p>
                            <p className="mb-4">Enable/disable modules, focus and group-hover variants, new utilities, and more.</p>
                            <p className="mb-4">Learn more in our upgrade guide:</p>
                            <p className="mb-6"><a href="#" className="text-teal">github.com/tailwind/ta...</a></p>
                            <p><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet3.jpg" alt="tweet image" className="border border-solid border-grey-light rounded-sm" /></a></p>
                        </div>
                        <div className="pb-2">
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 6</a></span>
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-green"><i className="fa fa-retweet fa-lg mr-2"></i> 74</a></span>
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 206</a></span>
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-teal"><i className="fa fa-envelope fa-lg mr-2"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-solid border-grey-light">
                <div className="w-1/8 text-right pl-3 pt-3">
                    <div><i className="fa fa-retweet text-grey-dark mr-2"></i></div>
                    <div><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_egghead.jpg" alt="avatar" className="rounded-full h-12 w-12 mr-2" /></a></div>
                </div>

                <div className="w-7/8 p-3 pl-0">
                    <div className="text-xs text-grey-dark">Tailwind CSS Retweeted</div>
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold"><a href="#" className="text-black">egghead.io</a></span>
                            <span className="text-grey-dark">@eggheadio</span>
                            <span className="text-grey-dark">&middot;</span>
                            <span className="text-grey-dark">29 Nov 2017</span>
                        </div>
                        <div>
                            <a href="#" className="text-grey-dark hover:text-teal"><i className="fa fa-chevron-down"></i></a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="mb-6">Create a Responsive Card Component by Composing Tailwind's Utility classNamees - <a href="#" className="text-teal">#html</a> lesson by <a href="#" className="text-teal">@simonswiss</a></p>
                            <div className="flex border border-solid border-grey rounded">
                                <div className="w-1/4">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet4.jpg" alt="image" />
                                </div>
                                <div className="w-3/4 p-3">
                                    <div className="font-bold mb-1">egghead Lesson: Abstract utility classNamees to ...</div>
                                    <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptate tempore itaque culpa hic qui nostrum, minus harum cupiditate a voluptatibus.</p>
                                    <div className="text-grey-dark">egghead.io</div>
                                </div>
                            </div>

                        </div>
                        <div className="pb-2">
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 2</a></span>
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-green"><i className="fa fa-retweet fa-lg mr-2"></i> 8</a></span>
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 24</a></span>
                            <span className="mr-8"><a href="#" className="text-grey-dark hover:no-underline hover:text-teal"><i className="fa fa-envelope fa-lg mr-2"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

class MeComponent extends Component {
    render() {
        console.log("aaaaaaaaaaaaaaaaaa");
        console.log(this.props.flagMe);
        return (
            <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
                {/* Left side */}
                <div className="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4">
                    <h2><div className="text-black font-bold no-underline hover:underline">{this.props.userProfileReducer.name}</div></h2>
                    <div className="mb-4"><a href="#" className="text-grey-darker no-underline hover:underline">@{this.props.userProfileReducer.name}</a></div>

                    <div className="mb-4">
                        Team group of tblong, nhhung and lhly
                        </div>

                    <div className="mb-2"><i className="fa fa-map-marker fa-lg text-grey-darker mr-1"></i><a href="#" className="text-teal no-underline hover:underline"> Ho Chi Minh City</a></div>
                    <div className="mb-2"><i className="fa fa-at fa-lg text-grey-darker mr-1"></i><a href="#" className="text-teal no-underline hover:underline">{this.props.userProfileReducer.email}</a></div>
                    <div className="mb-4"><i className="fa fa-clock-o fa-lg text-grey-darker mr-1"></i><a href="#" className="text-teal no-underline hover:underline">4th Dec, 2018</a></div>

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
                </div> {/* End eft side */}

                {/* Middle */}
                <div className="w-full lg:w-1/2 bg-white mb-4">
                    <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
                        {                       
                        this.props.flagMe === "me"?
                        renderTweets(this.props):null
                        }
                    </div>

                    {
                        this.props.flagMe === "following"?
                        <FollowingContainer/>:null
                    }
                    {
                        this.props.flagMe === "follower"?
                        <FollowerContainer/>:null
                    }

                </div>
                {/* End middle */}

                {/* Right side */}
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
                {/* End right side */}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userProfileReducer: state.userProfileReducer,
    tweetsUserReducer: state.tweetsUserReducer,
    flagMe: state.flagMeReducer
})


export default connect(mapStateToProps, null)(MeComponent);
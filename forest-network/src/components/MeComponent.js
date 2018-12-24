import React, { Component } from 'react';
import '../styles/Home.css';
import '../styles/index.css';
import '../styles/status.css';
import { connect } from 'react-redux';
import FollowingContainer from '../containers/FollowingContainer';
import FollowerContainer from '../containers/FollowerContainer';
import HistoricalTransactionContainer from '../containers/HistoricalTransactionContainer';

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
        </div>);
}

export const MeComponent = (props) => {
    return (
        <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
            {       
                props.flagMe === "me"?                
                <div class="updateStatus">
                    <div >
                        <div >
                            <div class="posttweettacontainer">
                                <textarea 
                                    id="posttweetta" 
                                    class="posttweetta" 
                                    placeholder="What's happening?" 
                                    rows="5" 
                                    cols="50">
                                </textarea>
                                <div class="posttweetcountcont">
                                </div>
                            </div>
                            <div class="posttweetbutcont">
                                <button id="posttweetbut" class="posttweetbut">Post</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul id="tweetscontainer" class="tweetscontainer">
                            
                        </ul>
                    </div>
                    {renderTweets(props)}
                </div>:null
            }
            {
                props.flagMe === "following"?
                <FollowingContainer/>:null
            }
            {
                props.flagMe === "follower"?
                <FollowerContainer/>:null
            }
            {
                props.flagMe === "history" ?
                <HistoricalTransactionContainer/>:null
            }
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     userProfileReducer: state.userProfileReducer,
//     tweetsUserReducer: state.tweetsUserReducer,
//     flagMe: state.flagMeReducer
// })


// export default connect(mapStateToProps, null)(MeComponent);
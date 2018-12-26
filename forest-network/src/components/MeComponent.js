import React, { Component } from 'react';
import '../styles/Home.css';
import '../styles/index.css';
import '../styles/status.css';
import { connect } from 'react-redux';
import FollowingContainer from '../containers/FollowingContainer';
import FollowerContainer from '../containers/FollowerContainer';
import HistoricalTransactionContainer from '../containers/HistoricalTransactionContainer';
import { sentPostTransaction } from '../lib/transaction/sendTransaction'

class MeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderTweets: [],
            content_post: ''
        }
        // Binds our scroll event handler
        window.onscroll = () => {
            if (document.documentElement.scrollTop === document.documentElement.scrollHeight - document.documentElement.offsetHeight) {
                this.props.loadMore();
            }
        };
    }
    ChangePost = (e) => {
        this.setState({ content_post: e.target.value })
    }
    sentPost = () => {
        sentPostTransaction(this.state.content_post, this.props.userProfileReducer.sequence, rs => {
            if (typeof rs === 'undefined') {
                console.log('Fail to post')
            }
            else {
                if (rs.height === '0') {
                    console.log(rs.check_tx.log)
                }
                else {
                    console.log('Post success')
                    this.setState({ content_post: '' })
                    this.props.increase_sequence();
                }
            }
        })
    }
    renderAvatar = (avatar, _className) => {
        try {
            const src = 'data:image/jpeg;base64,' + Buffer.from(avatar).toString('base64');
            return (<img src={src} alt="avatar" className={_className} />)
        }
        catch (e) {
            return (<img src="images/default-avatar.jpg" alt="avatar" className={_className} />)
        }
    }
    render_a_tweet = (tweet, i) => {
        var createTime;
        const lastSignInTime = new Date(tweet.createAt);
        const curTime = new Date();
        var seconds = Math.floor((curTime - (lastSignInTime)) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
        if (days === 0)
            if (hours === 0)
                if (minutes === 0 || minutes === 1)
                    createTime = '1 minute ago' //ngày giờ là 0, phút là 0 hoặc 1
                else
                    createTime = minutes + ' minutes ago' //ngày giờ là 0, phút lớn hơn 1
            else
                if (hours === 1)
                    createTime = '1 hour ago' //ngày là 0, giờ là 1
                else
                    createTime = hours + ' hours ago' //ngày là 0, giờ lớn hơn 1
        else
            if (days === 1)
                createTime = '1 day ago' //ngày bằng 1
            else
                createTime = days + ' days ago' //ngày lớn hơn 1
        if (tweet.operation === 'create_account') {
            return (
                <div className="flex border-b border-solid border-grey-light" key={i}>
                    <div className="w-1/8 text-right pl-3 pt-3">
                        <div><span >{this.renderAvatar(tweet.creatorAvatar, "rounded-full h-12 w-12 mr-2")}</span></div>
                    </div>
                    <div className="w-7/8 p-3 pl-0">
                        <div className="flex justify-between">
                            <div>
                                <span className="font-bold"><span className="text-black"><h4 className="font-bold">{tweet.creatorName == null ? tweet.creatorId : tweet.creatorName}</h4></span></span>
                                <span className="text-grey-dark"></span>
                                <span className="text-grey-dark">&middot;</span>
                                <span className="text-grey-dark">{createTime}</span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <p>
                                    <span className="mb-6">Create new account </span>
                                    <span className="mb-6 text-teal hover-people">{tweet.param.address}</span>
                                    {/* <p><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet1.jpg" alt="tweet image" className="border border-solid border-grey-light rounded-sm" /></p> */}
                                </p>
                            </div>
                        </div>
                        <div className="pb-2">
                            <span className="mr-8"><span className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 0</span></span>
                            <span className="mr-8"><span className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 0</span></span>
                        </div>
                    </div>
                </div>
            )
        }
        else if (tweet.operation === 'payment') {
            return (
                <div className="flex border-b border-solid border-grey-light" key={i}>
                    <div className="w-1/8 text-right pl-3 pt-3">
                        <div><span>{this.renderAvatar(tweet.creatorAvatar, "rounded-full h-12 w-12 mr-2")}</span></div>
                    </div>
                    <div className="w-7/8 p-3 pl-0">
                        <div className="flex justify-between">
                            <div>
                                <span className="font-bold"><span className="text-black"><h4 className="font-bold">{tweet.creatorName == null ? tweet.creatorId : tweet.creatorName}</h4></span></span>
                                <span className="text-grey-dark"></span>
                                <span className="text-grey-dark">&middot;</span>
                                <span className="text-grey-dark">{createTime}</span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <p className="mb-6"><span className="text-teal hover-people">{tweet.creatorName == null ? tweet.creatorId : tweet.creatorName}</span> sent to <span className="text-teal hover-people">{tweet.param.name == null ? tweet.param.address : tweet.param.name}</span> {tweet.param.amount} CEL</p>
                                {/* <p className="mb-6"><Link to="/home/me/123">{tweet.param.value}</Link></p> */}
                                {/* <p><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet1.jpg" alt="tweet image" className="border border-solid border-grey-light rounded-sm" /></p> */}
                            </div>
                        </div>
                        <div className="pb-2">
                            <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 0</span></span>
                            <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 0</span></span>
                        </div>
                    </div>
                </div>
            )
        }
        else if (tweet.operation === 'update_account') {
            if (tweet.param.key === 'name') {
                return (<div className="flex border-b border-solid border-grey-light" key={i}>
                    <div className="w-1/8 text-right pl-3 pt-3">
                        <div><span >{this.renderAvatar(tweet.creatorAvatar, "rounded-full h-12 w-12 mr-2")}</span></div>
                    </div>
                    <div className="w-7/8 p-3 pl-0">
                        <div className="flex justify-between">
                            <div>
                                <span className="font-bold"><span className="text-black"><h4 className="font-bold">{tweet.creatorName == null ? tweet.creatorId : tweet.creatorName}</h4></span></span>
                                <span className="text-grey-dark"></span>
                                <span className="text-grey-dark">&middot;</span>
                                <span className="text-grey-dark">{createTime}</span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <p>
                                    <span className="mb-6">Update name to </span>
                                    <span className="mb-6"><span >{tweet.param.value}</span></span>
                                    {/* <p><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet1.jpg" alt="tweet image" className="border border-solid border-grey-light rounded-sm" /></p> */}
                                </p>
                            </div>
                        </div>
                        <div className="pb-2">
                            <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 0</span></span>
                            <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 0</span></span>
                        </div>
                    </div>
                </div>)
            }
            else if (tweet.param.key === 'picture') {
                return (<div className="flex border-b border-solid border-grey-light" key={i}>
                    <div className="w-1/8 text-right pl-3 pt-3">
                        <div><span >{this.renderAvatar(tweet.creatorAvatar, "rounded-full h-12 w-12 mr-2")}</span></div>
                    </div>
                    <div className="w-7/8 p-3 pl-0">
                        <div className="flex justify-between">
                            <div>
                                <span className="font-bold"><span className="text-black"><h4 className="font-bold">{tweet.creatorName == null ? tweet.creatorId : tweet.creatorName}</h4></span></span>
                                <span className="text-grey-dark"></span>
                                <span className="text-grey-dark">&middot;</span>
                                <span className="text-grey-dark">{createTime}</span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <p className="mb-6 ">Update new avatar</p>
                                <p><img src={'data:image/jpeg;base64,' + tweet.param.value} alt="avatar" className="border border-solid border-grey-light rounded-sm" /></p>
                            </div>
                        </div>
                        <div className="pb-2">
                            <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 0</span></span>
                            <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 0</span></span>
                        </div>
                    </div>
                </div>)
            }
            else if (tweet.param.key === 'followings') {
                var follow = '';
                tweet.param.value.map(acc => {
                    follow = follow + acc.name == null ? (' ' + acc.id) : (' ' + acc.name)
                })
                follow = follow.slice(0, -1);
                return (<div className="flex border-b border-solid border-grey-light" key={i}>
                    <div className="w-1/8 text-right pl-3 pt-3">
                        <div><span >{this.renderAvatar(tweet.creatorAvatar, "rounded-full h-12 w-12 mr-2")}</span></div>
                    </div>
                    <div className="w-7/8 p-3 pl-0">
                        <div className="flex justify-between">
                            <div>
                                <span className="font-bold"><span className="text-black"><h4 className="font-bold">{tweet.creatorName == null ? tweet.creatorId : tweet.creatorName}</h4></span></span>
                                <span className="text-grey-dark"></span>
                                <span className="text-grey-dark">&middot;</span>
                                <span className="text-grey-dark">{createTime}</span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <p className="mb-6 ">Followed {tweet.param.value.map((acc, i) => {
                                    if (i === tweet.param.value.length) {
                                        return (<span key={i} className="text-teal hover-people">{acc.name == null ? acc.id : acc.name}</span>)
                                    }
                                    else
                                        return (<span key={i}><span className="text-teal hover-people">{acc.name == null ? acc.id : acc.name}</span><span>, </span></span>)
                                })}</p>
                                {/* <p><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet1.jpg" alt="tweet image" className="border border-solid border-grey-light rounded-sm" /></p> */}
                            </div>
                        </div>
                        <div className="pb-2">
                            <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 0</span></span>
                            <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 0</span></span>
                        </div>
                    </div>
                </div>)
            }
        }
        else if (tweet.operation === 'post') {
            return (<div className="flex border-b border-solid border-grey-light" key={i}>
                <div className="w-1/8 text-right pl-3 pt-3">
                    <div><span >{this.renderAvatar(tweet.creatorAvatar, "rounded-full h-12 w-12 mr-2")}</span></div>
                </div>
                <div className="w-7/8 p-3 pl-0">
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold"><span className="text-black"><h4 className="font-bold">{tweet.creatorName == null ? tweet.creatorId : tweet.creatorName}</h4></span></span>
                            <span className="text-grey-dark"></span>
                            <span className="text-grey-dark">&middot;</span>
                            <span className="text-grey-dark">{createTime}</span>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="mb-6 ">{tweet.param.value}</p>
                            {/* <p><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet1.jpg" alt="tweet image" className="border border-solid border-grey-light rounded-sm" /></p> */}
                        </div>
                    </div>
                    <div className="pb-2">
                        <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-blue-light"><i className="fa fa-comment fa-lg mr-2"></i> 0</span></span>
                        <span className="mr-4"><span className="text-grey-dark hover:no-underline hover:text-red"><i className="fa fa-heart fa-lg mr-2"></i> 0</span></span>
                    </div>
                </div>
            </div>)
        }
    }

    render() {
        return (
            <div className="p-3 text-lg font-bold border-b border-solid border-grey-light" >
                {
                    this.props.flagMe === "me" ?
                        <div className="updateStatus">
                            <div >
                                <div >
                                    <div className="posttweettacontainer">
                                        <textarea
                                            id="posttweetta"
                                            className="posttweetta"
                                            placeholder="What's happening?"
                                            rows="5"
                                            cols="50">
                                        </textarea>
                                        <div className="posttweetcountcont">
                                        </div>
                                    </div>
                                    <div className="posttweetbutcont">
                                        <button id="posttweetbut" className="posttweetbut">Post</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ul id="tweetscontainer" className="tweetscontainer">

                                </ul>
                            </div>
                            {/* render tweets in here */}
                            {this.props.tweetsUser.map((tweet, i) => {
                                return this.render_a_tweet(tweet, i)
                            })}
                            {this.props.loadingState ? <p className="loading"> <hr></hr>Loading ...</p> : ""}
                            {this.props.nothingToLoad ? <p className="loading"> <hr></hr>Nothing to load</p> : ""}
                        </div> : null
                }
                {
                    this.props.flagMe === "following" ?
                        <FollowingContainer /> : null
                }
                {
                    this.props.flagMe === "follower" ?
                        <FollowerContainer /> : null
                }
                {
                    this.props.flagMe === "history" ?
                        <HistoricalTransactionContainer /> : null
                }
            </div>);
    }
}

// const mapStateToProps = (state) => ({
//     userProfileReducer: state.userProfileReducer,
//     tweetsUserReducer: state.tweetsUserReducer,
//     flagMe: state.flagMeReducer
// })

export default (MeComponent);
// export default connect(mapStateToProps, null)(MeComponent);
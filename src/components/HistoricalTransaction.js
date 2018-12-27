import React, { Component } from 'react';
import '../styles/Home.css';
import '../index.css';
import "../styles/Follow.css";
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class HistoricalTransaction extends Component {
    constructor(props) {
        super(props)
        // Binds our scroll event handler
        window.onscroll = () => {
            if (document.documentElement.scrollTop === document.documentElement.scrollHeight - document.documentElement.offsetHeight) {
                this.props.loadMoreTransaction();
            }
        };
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

    render_a_transaction = (tweet, i) => {
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

    render() {
        return (
            <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
                <h3 className="text-black mr-6 no-underline hover-underline">Historical Transaction</h3>
                {this.props.historicalTransaction.map((transaction, i) => {
                    return this.render_a_transaction(transaction, i)
                })}
                {this.props.loadingState ? <p className="loading"> <hr></hr>Loading ...</p> : ""}
                {this.props.nothingToLoad ? <p className="loading"> <hr></hr>Nothing to load</p> : ""}
            </div>
        );
    }
}

export default withRouter(HistoricalTransaction);
import React, { Component } from 'react';
import '../styles/Home.css';
import '../index.css';
import "../styles/Follow.css";
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class Following extends Component {
    renderAvatar = (avatar, _className) => {
        try {
            if (avatar !== null){
            const src = 'data:image/jpeg;base64,' + Buffer.from(avatar).toString('base64');
            return (<img src={src} alt="avatar" className={_className} />)
            }
            else {
                return (<img src="images/default-avatar.jpg" alt="avatar" className={_className} />)
            }
        }
        catch (e) {
            return (<img src="images/default-avatar.jpg" alt="avatar" className={_className} />)
        }
    }
    render() {
        console.log("Followingggggggg");
        console.log(this.props.following);

        console.log(this.props.following.length);

        return (
            <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">

                <div className="following-main w-full lg:w-1/2 bg-white mb-4">
                    {/* Title */}
                    <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
                        <a href="#" className="text-black mr-6 no-underline hover-underline">Following</a>
                    </div>

                    {
                        this.props.following.map((element, index)=>{
                            return (
                                <div className="flex border-b border-solid border-grey-light">
                                    <div className="w-1/8 text-right pl-3 pt-3">
                                        <div><span >{this.renderAvatar(element.avatar, "rounded-full h-12 w-12 mr-2")}</span></div>
                                    </div>
            
                                    <div className="w-7/8 p-3 pl-0">
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="font-bold"><a href="#" className="text-black">{element.name}</a></span>
                                            </div>
                                            <div>
                                                <button className="btn-following">Following</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }                
                </div>
            </div>
        );
    }
}

export default withRouter(Following);
import React, { Component } from 'react';
import '../../styles/Home.css';
import '../../index.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { change_flag_page, change_flag_me } from "../../actions/index";
class NavigationBar extends Component {
    onChangeFlagPage(event) {
        console.log(event);
        if (event === "me") {
            this.props.change_flag_page(event);
            this.props.change_flag_me(event);
        }
        else {
            this.props.change_flag_page(event);
        }
    }
    renderAvatar = (_className) => {
        if (this.props.userProfileReducer.avatar === null) {
            return (
                <img src="images/default-avatar.jpg" alt="avatar" className={_className} />
            )
        }
        else {
            const src = 'data:image/jpeg;base64,' + Buffer.from(this.props.userProfileReducer.avatar).toString('base64');
            return (
                <img src={src} alt="avatar" className={_className} />
            )
        }
    }
    onChangeFlagMe(event) {
        this.props.change_flag_me(event);
    }

    render() {
        var componentSelected = "text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal border-teal no-underline";
        var componentUnselected = "text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline";
        var homeStyles, notiStyles, meStyles;
        console.log("----------------");
        console.log(this.props.flagPage);
        if (this.props.flagPage === "me") {
            console.log("Here me");
            meStyles = componentSelected;
            notiStyles = homeStyles = componentUnselected;
        }
        else {
            console.log("Here home");
            homeStyles = componentSelected;
            notiStyles = meStyles = componentUnselected;
        }

        return (
            <div className="bg-white">
                <div className="container mx-auto flex flex-col lg:flex-row items-center py-2">
                    <nav className="w-full lg:w-2/5">
                        <Link to="/home" onClick={() => this.onChangeFlagPage("home")} className={homeStyles}><i className="fa fa-home fa-lg"></i>  Home</Link>
                        {/* <a href="#" className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"><i className="fa fa-bolt fa-lg"></i> Moments</a> */}
                        <Link to="/home/me" onClick={() => this.onChangeFlagPage("me")} className={meStyles}><i className="fa fa-user fa-lg"></i>  Me   </Link>
                    </nav>
                    <div className="w-full lg:w-1/5 text-center my-4 lg:my-0"><i className="fa fa-twitter fa-lg text-blue"></i></div>
                    <div className="w-full lg:w-2/5 flex lg:justify-end">
                        <div className="mr-4 relative">
                            <input type="text" className="bg-grey-lighter h-8 px-4 py-2 text-xs w-48 rounded-full" placeholder="Search Twitter" />
                            <span className="flex items-center absolute pin-r pin-y mr-3"><i className="fa fa-search text-grey"></i></span>
                        </div>
                        <div className="mr-4"><Link to="/home/me">{this.renderAvatar("h-8 w-8 rounded-full")}</Link></div>
                        <div><button className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full" onClick={this.props.log_out}>Log-out</button></div>
                    </div>
                </div>
                <div className="hero h-64 bg-cover h-60"></div>
                <div className="bg-white shadow">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">
                    <div className="photoContainer">
				        <div className="_1ro1 _5ycb drop_elem" id="u_0_1f">
					        <a className="_1nv3 _11kg profilePicThumb">
                                <div className="w-full lg:w-1/5">
                                    {this.renderAvatar("rounded-full h-48 w-48 lg:absolute lg:pin-l lg:pin-t lg:-mt-24")}
                                </div>
                            </a>
                            <div className="_156n _23fw" >
						<a href="#" className="_156p _1o5e">
							<li id="photo-choose-existing" className="photo-choose-existing upload-photo" role="presentation">
								<div className="photo-selector">
									<button className="btn styleinput" type="button">
										Change photo
									</button>
								 	<span className="photo-file-name">No file selected</span>
									<div className="image-selector">
										<input type="hidden" name="media_file_name" className="file-name"/>
										<input type="hidden" name="media_data_empty" className="file-data"/>
										<input type="file" name="media[]" className="file-input" tabindex="-1" title="Add Photo" accept="image/gif,image/jpeg,image/jpg,image/png"/>
									</div>
								</div>
							</li>
							<li id="photo-choose-webcam" className="u-hidden" role="presentation">
								<button type="button" className="dropdown-link">Take photo</button>
							</li>
							<li id="photo-delete-image" className="u-hidden" role="presentation">
							<button type="button" className="dropdown-link">Remove</button>
								</li>
						</a>
					    </div>
                        </div>
                    </div>
                        {
                            this.props.flagPage === "me" ?
                                <div className="w-full lg:w-1/1">
                                    <ul className="list-reset flex">
                                        <li className="text-center py-3 px-2 border-b-2 border-solid border-transparent">
                                            <button onClick={() => this.onChangeFlagMe("me")} className="text-grey-darker no-underline hover:no-underline">
                                                <div className="text-sm font-bold tracking-tight mb-1">Tweets</div>
                                                <div className="text-lg tracking-tight font-bold text-teal">{this.props.userProfileReducer.tweets}</div>
                                            </button>
                                        </li>
                                        <li className="text-center py-3 px-2 border-b-2 border-solid border-transparent">
                                            <button onClick={() => this.onChangeFlagMe("following")} className="text-grey-darker no-underline hover:no-underline">
                                                <div className="text-sm font-bold tracking-tight mb-1">Following</div>
                                                <div className="text-lg tracking-tight font-bold text-teal">{this.props.userProfileReducer.following}</div>
                                            </button>
                                        </li>
                                        <li className="text-center py-3 px-2 border-b-2 border-solid border-transparent">
                                            <button onClick={() => this.onChangeFlagMe("follower")} className="text-grey-darker no-underline hover:no-underline">
                                                <div className="text-sm font-bold tracking-tight mb-1">Followers</div>
                                                <div className="text-lg tracking-tight font-bold text-teal">{this.props.userProfileReducer.follower}</div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                : null
                        }
                    </div>
                    {/* <!-- End Header --> */}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    userProfileReducer: state.userProfileReducer,
    flagPage: state.flagPageReducer
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        change_flag_page: (event) => {
            dispatch(change_flag_page(event));
        },
        change_flag_me: (event) => {
            dispatch(change_flag_me(event));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));
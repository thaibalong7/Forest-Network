import React, { Component } from 'react';
import {MeComponent} from '../components/MeComponent'
import { connect } from 'react-redux';

class MeContainer extends Component {
	render() {
		return (
			<MeComponent 
				flagMe={this.props.flagMe}
				userProfileReducer={this.props.userProfileReducer}>
			</MeComponent>
		);
	}
}

const mapStateToProps = (state) => ({
    userProfileReducer: state.userProfileReducer,
    tweetsUserReducer: state.tweetsUserReducer,
    flagMe: state.flagMeReducer
})

export default connect(mapStateToProps, null)(MeContainer);
// export default MeContainer;
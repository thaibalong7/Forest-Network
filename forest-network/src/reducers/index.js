import { combineReducers } from 'redux';
import userProfileReducer from './UserProfileReducer';
import tweetsUserReducer from './TweetsUserReducer';
import tweetsHomeReducer from './TweetsHomeReducer';
import flagPageReducer from './flagReducer';
import flagMeReducer from './flagMeReducer';
import followingReducer from './followingReducer';
import followerReducer from './followerReducer';

export default combineReducers({
    userProfileReducer: userProfileReducer,
    tweetsUserReducer: tweetsUserReducer,
    flagPageReducer: flagPageReducer,
    flagMeReducer: flagMeReducer,
    tweetsHomeReducer: tweetsHomeReducer,
    followingReducer: followingReducer,
    followerReducer: followerReducer
});
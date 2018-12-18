import { combineReducers } from 'redux';
import userProfileReducer from './UserProfileReducer';
import tweetsUserReducer from './TweetsUserReducer';
import flagReducer from './flagReducer';

export default combineReducers({
    userProfileReducer: userProfileReducer,
    tweetsUserReducer: tweetsUserReducer,
    flagReducer: flagReducer
});
import { combineReducers } from 'redux';
import userProfileReducer from './UserProfileReducer';
import tweetsUserReducer from './TweetsUserReducer';
import flagPageReducer from './flagReducer';
import flagMeReducer from './flagMeReducer';

export default combineReducers({
    userProfileReducer: userProfileReducer,
    tweetsUserReducer: tweetsUserReducer,
    flagPageReducer: flagPageReducer,
    flagMeReducer: flagMeReducer
});
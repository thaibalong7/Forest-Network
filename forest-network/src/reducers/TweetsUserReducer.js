import {
    UPDATE_TWEETS_USER,
    LOADMORE_TWEETS_USER
} from '../actions/types'

const initialState = [];

const tweetsUserReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case UPDATE_TWEETS_USER: {
            const { tweets_user } = action;
            return tweets_user;
        }
        case LOADMORE_TWEETS_USER: {
            const { tweets_home } = action;
            return [...prevState, ...tweets_home];
        }
        default:
            return prevState;
    }


}

export default tweetsUserReducer;

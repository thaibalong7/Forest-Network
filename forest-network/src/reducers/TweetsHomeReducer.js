import {
    UPDATE_TWEETS_HOME,
    LOADMORE_TWEETS_HOME
} from '../actions/types'

const initialState = [];

const tweetsHomeReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case UPDATE_TWEETS_HOME: {
            const { tweets_home } = action;
            return tweets_home;
        }
        case LOADMORE_TWEETS_HOME: {
            const { tweets_home } = action;
            return [...prevState, ...tweets_home];
        }
        default:
            return prevState;
    }


}

export default tweetsHomeReducer;
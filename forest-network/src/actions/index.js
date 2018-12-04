import {
    CHANGE_USER_INFO,
    LOAD_TWEETS
} from './types'

export const change_user_info = (user_info) => {
    return {
        type: CHANGE_USER_INFO,
        user_info
    }
}

export const load_tweets = () => {
    return {
        type: LOAD_TWEETS,
    }
}
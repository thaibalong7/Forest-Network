import {
    CHANGE_USER_INFO,
    UPDATE_TWEETS_USER,
    INCREASE_SEQUENCE,
    CHANGE_FLAG_PAGE,
    CHANGE_FLAG_ME,
    UPDATE_TWEETS_HOME,
    LOADMORE_TWEETS_HOME,
    LOADMORE_TWEETS_USER,
    LOAD_FOLLOWING,
    LOAD_FOLLOWER,
    CHANGE_NAME,
    ADD_NEW_TWEET_HOME,
    UPDATE_HISTORICAL_TRANSACTION,
    LOADMORE_HISTORICAL_TRANSACTION,
    UPDATE_AVATAR_USER
} from './types'

export const change_user_info = (user_info) => {
    return {
        type: CHANGE_USER_INFO,
        user_info
    }
}

export const increase_sequence = () => {
    return {
        type: INCREASE_SEQUENCE,
    }
}

export const change_name = (name) => {
    return {
        type: CHANGE_NAME,
        name
    }
}

export const update_tweets_user = (tweets_user) => {
    return {
        type: UPDATE_TWEETS_USER,
        tweets_user
    }
}

export const loadmore_tweets_user = (tweets_user) => {
    return {
        type: LOADMORE_TWEETS_USER,
        tweets_user
    }
}

export const update_tweets_home = (tweets_home) => {
    return {
        type: UPDATE_TWEETS_HOME,
        tweets_home
    }
}

export const loadmore_tweets_home = (tweets_home) => {
    return {
        type: LOADMORE_TWEETS_HOME,
        tweets_home
    }
}

export const add_new_tweet = (new_tweet) => {
    return {
        type: ADD_NEW_TWEET_HOME,
        new_tweet
    }
}

export const change_flag_page = (flag) => {
    return {
        type: CHANGE_FLAG_PAGE,
        flag
    }
}

export const change_flag_me = (flag) => {
    return {
        type: CHANGE_FLAG_ME,
        flag
    }
}

export const load_following = (following) => {
    return {
        type: LOAD_FOLLOWING,
        following
    }
}

export const load_follower = (follower) => {
    return {
        type: LOAD_FOLLOWER,
        follower
    }
}

export const update_historical_transaction = (list_transaction) =>{
    return {
        type: UPDATE_HISTORICAL_TRANSACTION,
        list_transaction
    }
}

export const loadmore_historical_transaction = (list_transaction) =>{
    return {
        type: LOADMORE_HISTORICAL_TRANSACTION,
        list_transaction
    }
}

export const update_avatar_user = (avatar) =>{
    return {
        type: UPDATE_AVATAR_USER,
        avatar
    }
}
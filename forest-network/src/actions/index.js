import {
    CHANGE_USER_INFO,
    LOAD_TWEETS,
    CHANGE_FLAG_PAGE,
    CHANGE_FLAG_ME
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
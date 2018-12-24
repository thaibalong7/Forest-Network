import {
    CHANGE_USER_INFO,
} from '../actions/types'

import { API_server } from '../config'

const initialState = {
    id: '',
    name: 'NoName',
    avatar: '',
    sequence: 0,
    tweets: 0,
    follower: 0,
    following: 0,
    bandwidth: 0,
    balance: 0
};

const userProfileReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_INFO: {
            const { user_info } = action;
            return user_info;
        }
        default:
            return prevState;
    }


}

export default userProfileReducer;

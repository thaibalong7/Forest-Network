import {
    CHANGE_USER_INFO,
    INCREASE_SEQUENCE,
    CHANGE_NAME,
    UPDATE_AVATAR_USER
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
        case INCREASE_SEQUENCE: {
            const cur_sequence = parseInt(prevState.sequence)
            return { ...prevState, sequence: cur_sequence + 1 }
        }
        case CHANGE_NAME: {
            const { name } = action;
            return { ...prevState, name: name }
        }
        case UPDATE_AVATAR_USER: {
            const { avatar } = action
            return { ...prevState, avatar: Buffer.from(avatar) }
        }
        default:
            return prevState;
    }


}

export default userProfileReducer;

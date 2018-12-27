import {
    LOAD_FOLLOWING,
} from '../actions/types';

const initialState = [];

const loadFollowing = (prevState = initialState, action) => {
    switch (action.type) {
        case LOAD_FOLLOWING: {
            const { following } = action;
            return following;
        }
        default:
            return prevState;
    }
}

export default loadFollowing;


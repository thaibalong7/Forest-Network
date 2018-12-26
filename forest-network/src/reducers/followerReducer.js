import {
    LOAD_FOLLOWER,
} from '../actions/types';

const initialState = [];

const loadFollower = (prevState = initialState, action) => {
    switch (action.type) {
        case LOAD_FOLLOWER: {
            const { follower } = action;
            return follower;
        }
        default:
            return prevState;
    }
}

export default loadFollower;


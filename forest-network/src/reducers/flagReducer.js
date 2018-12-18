import {
    CHANGE_FLAG,
} from '../actions/types';

const initialState = "home";

const flag = (prevState = initialState, action) => {
    switch (action.type) {
        case CHANGE_FLAG: {
            prevState = action.flag;
            return prevState;
        }
        default:
            return prevState;
    }

}

export default flag;


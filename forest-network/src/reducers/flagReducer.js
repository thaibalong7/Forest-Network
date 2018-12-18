import {
    CHANGE_FLAG,
} from '../actions/types';


var flagDefault = JSON.parse(localStorage.getItem('flagReducer'));

const initialState = flagDefault ? flagDefault : "home";

const flag = (prevState = initialState, action) => {
    switch (action.type) {
        case CHANGE_FLAG: {
            prevState = action.flag;
            localStorage.setItem("flagReducer", JSON.stringify(prevState));
            return prevState;
        }
        default:
            return prevState;
    }

}

export default flag;


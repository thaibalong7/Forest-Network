import {
    CHANGE_FLAG_ME,
} from '../actions/types';


var flagDefault = JSON.parse(localStorage.getItem('flagMeReducer'));

const initialState = flagDefault ? flagDefault : "me";

const flagMe = (prevState = initialState, action) => {
    switch (action.type) {
        case CHANGE_FLAG_ME: {
            prevState = action.flag;
            localStorage.setItem("flagMeReducer", JSON.stringify(prevState));
            return prevState;
        }
        default:
            return prevState;
    }
}

export default flagMe;


import {
    CHANGE_FLAG_PAGE,
} from '../actions/types';


var flagDefault = JSON.parse(localStorage.getItem('flagReducer'));

const initialState = flagDefault ? flagDefault : "home";

const flagPage = (prevState = initialState, action) => {
    switch (action.type) {
        case CHANGE_FLAG_PAGE: {
            prevState = action.flag;
            localStorage.setItem("flagReducer", JSON.stringify(prevState));
            return prevState;
        }
        default:
            return prevState;
    }
}

export default flagPage;


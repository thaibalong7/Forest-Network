import {
    CHANGE_USER_INFO,
} from '../actions/types'

const initialState = {
    name: 'tblong',
    link: 'tblong',
    avatarUrl: 'https://lh3.googleusercontent.com/-2TFVM9adrO4/V_0GGJaxVtI/AAAAAAAACl0/ljqI4V2hMYwCqyxjEjsMcvmyvZinpfECQCEwYBhgL/w140-h139-p/28846486360_5541b15451_o.jpg',
    tweets: 16,
    follower: 551,
    following: 154,
    email: 'abcxys@gmail.com'
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

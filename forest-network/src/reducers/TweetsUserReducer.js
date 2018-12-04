import {
    
} from '../actions/types'

const initialState = [
    {
        tweetTime: new Date(),
        content: 'Đây là bài post thứ Ba ba ba ba',
        comment: 16,
        like: 64,
        share: 1,
        isImage: false,
        image: null,
    },
    {
        tweetTime: new Date(),
        content: 'Đây là bài post thứ hai',
        comment: 18,
        like: 24,
        share: 0,
        isImage: false,
        image: null,
    },
    {
        tweetTime: new Date(),
        content: 'Đây là bài post đầu tiên',
        comment: 1,
        like: 25,
        share: 0,
        isImage: false,
        image: null,
    },
];

const tweetsUserReducer = (prevState = initialState, action) => {
    switch (action.type) {
      
        default:
            return prevState;
    }


}

export default tweetsUserReducer;

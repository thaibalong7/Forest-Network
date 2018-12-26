import {
    UPDATE_HISTORICAL_TRANSACTION,
    LOADMORE_HISTORICAL_TRANSACTION,
} from '../actions/types'

const initialState = [];

const historicalTransactionReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case UPDATE_HISTORICAL_TRANSACTION: {
            const { list_transaction } = action;
            return list_transaction;
        }
        case LOADMORE_HISTORICAL_TRANSACTION: {
            const { list_transaction } = action;
            return [...prevState, ...list_transaction];
        }
        default:
            return prevState;
    }


}

export default historicalTransactionReducer;
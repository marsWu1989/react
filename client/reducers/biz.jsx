import {
    BIZ_REQUEST,
    BIZ_RECEIVE,
} from '../constants/biz';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case BIZ_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case BIZ_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

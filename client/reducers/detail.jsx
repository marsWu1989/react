import {
    DETAIL_REQUEST,
    DETAIL_RECEIVE,
} from '../constants/detail';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case DETAIL_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case DETAIL_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

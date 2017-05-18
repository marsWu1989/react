import {
    JOIN_DETAIL_REQUEST,
    JOIN_DETAIL_RECEIVE,
} from '../constants/joinDetail';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case JOIN_DETAIL_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case JOIN_DETAIL_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

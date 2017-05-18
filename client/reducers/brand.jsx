import {
    BRAND_REQUEST,
    BRAND_RECEIVE,
} from '../constants/brand';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case BRAND_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case BRAND_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

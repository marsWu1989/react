import {
    ABOUT_REQUEST,
    ABOUT_RECEIVE,
} from '../constants/about';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case ABOUT_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case ABOUT_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

import {
    JOIN_REQUEST,
    JOIN_RECEIVE,
} from '../constants/join';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case JOIN_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case JOIN_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

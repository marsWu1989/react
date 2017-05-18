import {
    NUM_REQUEST,
    NUM_RECEIVE,
} from '../constants/num';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case NUM_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case NUM_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

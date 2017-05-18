import {
    INDEXNEWS_REQUEST,
    INDEXNEWS_RECEIVE,
} from '../constants/indexNews';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case INDEXNEWS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case INDEXNEWS_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

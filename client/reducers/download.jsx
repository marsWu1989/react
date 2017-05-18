import {
    DOWNLOAD_REQUEST,
    DOWNLOAD_RECEIVE,
} from '../constants/download';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case DOWNLOAD_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case DOWNLOAD_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

import {
    ROAD_REQUEST,
    ROAD_RECEIVE,
} from '../constants/road';

export default (state = {
    isFetching: false,
    data: {}
}, action) => {
    switch (action.type) {
        case ROAD_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case ROAD_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
};

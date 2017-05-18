import {
    REPORT_REQUEST,
    REPORT_RECEIVE,
} from '../constants/report';

export default (state = {
    isFetching: false,
    items: [],
    page_no: null
}, action) => {
    switch (action.type) {
        case REPORT_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case REPORT_RECEIVE:
            action.data.report.data.rows.map(i => state.items.push(i));
            return {
                ...state,
                isFetching: false,
                items: state.items,
                page_no: action.data.report.data.page_no,
                banner: action.data.banner
            };
        default:
            return state;
    }
};

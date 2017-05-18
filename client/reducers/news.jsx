import {
    NEWS_REQUEST,
    NEWS_RECEIVE,
} from '../constants/news';

export default (state = {
    isFetching: false,
    items: [],
    page_no: null
}, action) => {
    switch (action.type) {
        case NEWS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case NEWS_RECEIVE:
            action.data.news.data.rows.map(i => state.items.push(i));
            return {
                ...state,
                isFetching: false,
                items: state.items,
                page_no: action.data.news.data.page_no,
                banner: action.data.banner,
            };
        default:
            return state;
    }
};

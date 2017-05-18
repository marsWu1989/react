import 'isomorphic-fetch';

import {
    NEWS_REQUEST,
    NEWS_RECEIVE,
} from '../constants/news';
import cfg from '../../domainConfig';

export const newsRequest = n => ({
    type: NEWS_REQUEST,
    amount: n
});

export const newsReceive = (n, stories) => ({
    type: NEWS_RECEIVE,
    amount: n,
    data: stories
});

export const newsPost = n => (dispatch) => {
    dispatch(newsRequest(n));
    return fetch(`${cfg.domain}/api/news?page_no=${n}`)
    .then((response) => {
        if (response.status >= 400) {
            console.log('net work fail');
        }

        return response.json();
    })
    .then((json) => {
        dispatch(newsReceive(n, json));
    }).catch(ex =>
        console.log('parsing failed', ex)
    );
};

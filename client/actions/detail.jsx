import 'isomorphic-fetch';

import {
    DETAIL_REQUEST,
    DETAIL_RECEIVE,
} from '../constants/detail';
import cfg from '../../domainConfig';

export const detailRequest = n => ({
    type: DETAIL_REQUEST,
    amount: n
});

export const detailReceive = (n, stories) => ({
    type: DETAIL_RECEIVE,
    amount: n,
    data: stories
});

export const detailPost = n => (dispatch) => {
    dispatch(detailRequest(n));
    return fetch(`${cfg.domain}/api/news/${n}`)
    .then((response) => {
        if (response.status >= 400) {
            console.log('net work fail');
        }

        return response.json();
    })
    .then((json) => {
        dispatch(detailReceive(n, json.data));
    }).catch(ex =>
        console.log('parsing failed', ex)
    );
};

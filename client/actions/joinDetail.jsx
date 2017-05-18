import 'isomorphic-fetch';

import {
    JOIN_DETAIL_REQUEST,
    JOIN_DETAIL_RECEIVE,
} from '../constants/joinDetail';
import cfg from '../../domainConfig';

export const joinDetailRequest = n => ({
    type: JOIN_DETAIL_REQUEST,
    amount: n
});

export const joinDetailReceive = (n, stories) => ({
    type: JOIN_DETAIL_RECEIVE,
    amount: n,
    data: stories
});

export const joinDetailPost = n => (dispatch) => {
    dispatch(joinDetailRequest(n));
    return fetch(`${cfg.domain}/api/job/${n}`)
    .then((response) => {
        if (response.status >= 400) {
            console.log('net work fail');
        }
        return response.json();
    })
    .then((json) => {
        dispatch(joinDetailReceive(n, json.data));
    }).catch(ex =>
        console.log('parsing failed', ex)
    );
};

import 'isomorphic-fetch';

import {
    REPORT_REQUEST,
    REPORT_RECEIVE,
} from '../constants/report';
import cfg from '../../domainConfig';

export const reportRequest = n => ({
    type: REPORT_REQUEST,
    amount: n
});

export const reportReceive = (n, stories) => ({
    type: REPORT_RECEIVE,
    amount: n,
    data: stories
});

export const reportPost = n => (dispatch) => {
    dispatch(reportRequest(n));
    return fetch(`${cfg.domain}/api/report?page_no=${n}&page_length=5`)
    .then((response) => {
        if (response.status >= 400) {
            console.log('net work fail');
        }

        return response.json();
    })
    .then((json) => {
        dispatch(reportReceive(n, json));
    }).catch(ex =>
        console.log('parsing failed', ex)
    );
};

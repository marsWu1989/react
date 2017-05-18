import 'isomorphic-fetch';

import {
    BIZ_REQUEST,
    BIZ_RECEIVE,
} from '../constants/biz';
import cfg from '../../domainConfig';

export const bizRequest = () => ({
    type: BIZ_REQUEST
});

export const bizReceive = stories => ({
    type: BIZ_RECEIVE,
    data: stories
});

export const bizPost = () => (dispatch) => {
    dispatch(bizRequest());
    return fetch(`${cfg.domain}/api/biz`)
    .then((response) => {
        if (response.status >= 400) {
            console.log('net work fail');
        }

        return response.json();
    })
    .then((json) => {
        dispatch(bizReceive(json));
    }).catch(ex =>
        console.log('parsing failed', ex)
    );
};

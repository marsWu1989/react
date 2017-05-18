import 'isomorphic-fetch';

import {
    INDEXNEWS_REQUEST,
    INDEXNEWS_RECEIVE,
} from '../constants/indexNews';
import cfg from '../../domainConfig';

export const indexNewsRequest = () => ({
    type: INDEXNEWS_REQUEST
});

export const indexNewsReceive = stories => ({
    type: INDEXNEWS_RECEIVE,
    data: stories
});

export const indexNewsPost = () => (dispatch) => {
    dispatch(indexNewsRequest());
    return fetch(`${cfg.domain}/api`)
    .then((response) => {
        if (response.status >= 400) {
            console.log('net work fail');
        }
        return response.json();
    })
    .then((json) => {
        dispatch(indexNewsReceive(json));
    }).catch(ex =>
        console.log('parsing failed', ex)
    );
};

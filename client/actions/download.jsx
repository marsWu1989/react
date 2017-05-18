import 'isomorphic-fetch';

import {
    DOWNLOAD_REQUEST,
    DOWNLOAD_RECEIVE,
} from '../constants/download';
import cfg from '../../domainConfig';

export const downloadRequest = () => ({
    type: DOWNLOAD_REQUEST
});

export const downloadReceive = stories => ({
    type: DOWNLOAD_RECEIVE,
    data: stories
});

export const downloadPost = () => (dispatch) => {
    dispatch(downloadRequest());
    return fetch(`${cfg.domain}/api/mjsoft`)
        .then((response) => {
            if (response.status >= 400) {
                console.log('net work fail');
            }

            return response.json();
        })
        .then((json) => {
            dispatch(downloadReceive(json));
        }).catch(ex =>
            console.log('parsing failed', ex)
        );
};

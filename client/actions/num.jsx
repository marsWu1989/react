import 'isomorphic-fetch';

import {
    NUM_REQUEST,
    NUM_RECEIVE,
} from '../constants/num';
import cfg from '../../domainConfig';

export const numRequest = () => ({
    type: NUM_REQUEST
});

export const numReceive = stories => ({
    type: NUM_RECEIVE,
    data: stories
});

export const numPost = () => (dispatch) => {
    dispatch(numRequest());
    return fetch(`${cfg.domain}/api/tob`)
    .then((response) => {
        if (response.status >= 400) {
            console.log('net work fail');
        }
        return response.json();
    })
    .then((json) => {
        dispatch(numReceive(json));
    }).catch(ex =>
        console.log('parsing failed', ex)
    );
};

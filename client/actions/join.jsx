import 'isomorphic-fetch';

import {
    JOIN_REQUEST,
    JOIN_RECEIVE,
} from '../constants/join';
import cfg from '../../domainConfig';

export const joinRequest = () => ({
    type: JOIN_REQUEST
});

export const joinReceive = stories => ({
    type: JOIN_RECEIVE,
    data: stories
});

export const joinPost = () => (dispatch) => {
    dispatch(joinRequest());
    return fetch(`${cfg.domain}/api/job/`)
    .then((response) => {
        if (response.status >= 400) {
            console.log('net work fail');
        }
        return response.json();
    })
    .then((json) => {
        console.log(json);
        dispatch(joinReceive(json));
    }).catch(ex =>
        console.log('parsing failed', ex)
    );
};

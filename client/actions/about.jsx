import 'isomorphic-fetch';

import {
    ABOUT_REQUEST,
    ABOUT_RECEIVE,
} from '../constants/about';
import cfg from '../../domainConfig';

export const aboutRequest = () => ({
    type: ABOUT_REQUEST
});

export const aboutReceive = stories => ({
    type: ABOUT_RECEIVE,
    data: stories
});

export const aboutPost = () => (dispatch) => {
    dispatch(aboutRequest());
    return fetch(`${cfg.domain}/api/about/`)
        .then((response) => {
            if (response.status >= 400) {
                console.log('net work fail');
            }
            return response.json();
        })
        .then((json) => {
            dispatch(aboutReceive(json));
        }).catch(ex =>
            console.log('parsing failed', ex)
        );
};

import 'isomorphic-fetch';

import {
    BRAND_REQUEST,
    BRAND_RECEIVE,
} from '../constants/brand';
import cfg from '../../domainConfig';

export const brandRequest = () => ({
    type: BRAND_REQUEST
});

export const brandReceive = stories => ({
    type: BRAND_RECEIVE,
    data: stories
});

export const brandPost = () => (dispatch) => {
    dispatch(brandRequest());
    return fetch(`${cfg.domain}/api/mojibrand`)
    .then((response) => {
        if (response.status >= 400) {
            console.log('net work fail');
        }

        return response.json();
    })
    .then((json) => {
        dispatch(brandReceive(json));
    }).catch(ex =>
        console.log('parsing failed', ex)
    );
};

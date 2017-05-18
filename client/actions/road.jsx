import 'isomorphic-fetch';

import {
    ROAD_REQUEST,
    ROAD_RECEIVE,
} from '../constants/road';
import cfg from '../../domainConfig';

export const roadRequest = () => ({
    type: ROAD_REQUEST
});

export const roadReceive = stories => ({
    type: ROAD_RECEIVE,
    data: stories
});

export const roadPost = () => (dispatch) => {
    dispatch(roadRequest());
    return fetch(`${cfg.domain}/api/culture/`)
        .then((response) => {
            if (response.status >= 400) {
                console.log('net work fail');
            }
            return response.json();
        })
        .then((json) => {
            dispatch(roadReceive(json));
        }).catch(ex =>
            console.log('parsing failed', ex)
        );
};

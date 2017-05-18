import { combineReducers } from 'redux';

import forecast from './forecast';
import indexNews from './indexNews';
import news from './news';
import detail from './detail';
import num from './num';
import report from './report';
import biz from './biz';
import brand from './brand';
import join from './join';
import joinDetail from './joinDetail';
import download from './download';
import about from './about';
import road from './road';

const rootReducer = combineReducers({
    forecast,
    indexNews,
    news,
    detail,
    num,
    report,
    biz,
    brand,
    join,
    joinDetail,
    download,
    about,
    road,
});

export default rootReducer;


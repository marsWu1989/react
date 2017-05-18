import forecast from './../client/actions/forecast';
import {
    indexNewsReceive
} from './../client/actions/indexNews';
import {
    newsReceive
} from './../client/actions/news';
import {
    detailReceive
} from './../client/actions/detail';
import {
    numReceive
} from './../client/actions/num';
import {
    reportReceive
} from './../client/actions/report';
import {
    bizReceive
} from './../client/actions/biz';
import {
    brandReceive
} from './../client/actions/brand';
import {
    joinReceive
} from './../client/actions/join';
import {
    joinDetailReceive
} from './../client/actions/joinDetail';
import {
    downloadReceive
} from './../client/actions/download';
import {
    aboutReceive
} from './../client/actions/about';
import {
    roadReceive
} from './../client/actions/road';

// todo...
export default (ctx, next, store) => {
    store.dispatch(forecast(ctx.state.forecast));
    switch (ctx.path) {
        case '/':
            store.dispatch(indexNewsReceive(ctx.state.indexNews));
            break;
        case '/news':
            store.dispatch(newsReceive(ctx.state.id, ctx.state.news));
            break;
        case `/news/${ctx.path.split('/')[2]}`:
            store.dispatch(detailReceive(ctx.state.id, ctx.state.detail));
            break;
        case '/tob':
            store.dispatch(numReceive(ctx.state.mum));
            break;
        case '/about':
            store.dispatch(aboutReceive(ctx.state.about));
            break;
        case '/report':
            store.dispatch(reportReceive(ctx.state.id, ctx.state.report));
            break;
        case '/biz':
            store.dispatch(bizReceive(ctx.state.biz));
            break;
        case '/mojibrand':
            store.dispatch(brandReceive(ctx.state.brand));
            break;
        case '/job':
            store.dispatch(joinReceive(ctx.state.join));
            break;
        case `/job/${ctx.path.split('/')[2]}`:
            store.dispatch(joinDetailReceive(ctx.state.id, ctx.state.joinDetail));
            break;
        case '/mjsoft':
            store.dispatch(downloadReceive(ctx.state.download));
            break;
        case '/culture':
            store.dispatch(roadReceive(ctx.state.road));
            break;
        default:
            store.dispatch(detailReceive(ctx.state.id, ctx.state.detail));
            break;
    }
};
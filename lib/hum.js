import HomeModel from './../server/models/HomeModel';
import NewsModel from './../server/models/NewsModel';
import NumModel from './../server/models/NumModel';
import ReportModel from './../server/models/ReportModel';
import BrandModel from './../server/models/BrandModel';
import JoinModel from './../server/models/JoinModel';
import ContantModel from './../server/models/ContantModel';
import CooperateModel from './../server/models/CooperateModel';
import BannerModel from './../server/models/BannerModel';

export default async(ctx, next) => {
    let opt = {};
    opt = {
        id: ctx.path.split('/')[2],
        name: ctx.path.split('/')[1],
    };
    ctx.state.forecast = await HomeModel.forecast(ctx, next) || null;
    switch (ctx.path) {
        case '/':
            ctx.state.indexNews = {
                news: await HomeModel.news(ctx, next) || null,
                banner: await BannerModel.banner(ctx, next, opt) || null,
            };
            break;
        case '/news':
            opt = {
                name: 'news',
            };
            ctx.state.news = {
                news: await NewsModel.list(ctx, next) || null,
                banner: await BannerModel.banner(ctx, next, opt) || null,
            };
            break;
        case `/news/${ctx.path.split('/')[2]}`:
            ctx.state.detail = await NewsModel.detail(ctx, next, opt) || null;
            break;
        case '/tob':
            ctx.state.tobNum = await NumModel.num(ctx, next) || null;
            break;
        case '/about':
            ctx.state.about = {
                num: await NumModel.num(ctx, next) || null,
                banner: await BannerModel.banner(ctx, next, opt) || null,
            };
            break;
        case '/biz':
            ctx.state.biz = {
                contant: await ContantModel.list(ctx, next) || null,
                cooperate: await CooperateModel.list(ctx, next) || null,
                banner: await BannerModel.banner(ctx, next, opt) || null,
            };
            break;
        case '/report':
            opt = {
                name: 'report',
            };
            ctx.state.report = {
                report: await ReportModel.list(ctx, next) || null,
                banner: await BannerModel.banner(ctx, next, opt) || null,
            };
            break;
        case '/mojibrand':
            ctx.state.brand = {
                brand: await BrandModel.list(ctx, next) || null,
                banner: await BannerModel.banner(ctx, next, opt) || null,
            };
            break;
        case '/job':
            ctx.state.join = {
                data: await JoinModel.list(ctx, next) || null,
                banner: await BannerModel.banner(ctx, next, opt) || null,
            };
            break;
        case `/job/${ctx.path.split('/')[2]}`:
            ctx.state.joinDetail = await JoinModel.detail(ctx, next, opt) || null;
            break;
        case '/mjsoft':
            ctx.state.download = {
                banner: await BannerModel.banner(ctx, next, opt) || null,
            };
            break;
        case '/culture':
            ctx.state.road = {
                banner: await BannerModel.banner(ctx, next, opt) || null,
            };
            break;
        default:
            ctx.state.forecast = await HomeModel.forecast(ctx, next) || null;
    }

    await next();
};
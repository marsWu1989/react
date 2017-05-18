import HomeModel from './../models/HomeModel';
import BannerModel from './../models/BannerModel';

const Home = {};
// 模拟数据
Home.forecast = async(ctx, next) => {
    try {
        const data = await HomeModel.forecast(ctx, next);

        ctx.body = data;
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};

Home.news = async(ctx, next) => {
    // console.log(ctx.request.url.split('/')[1]);
    const name = ctx.request.url.split('/')[2];
    const opt = {
        name: name
    };
    try {
        const news = await HomeModel.news(ctx, next);
        const banner = await BannerModel.banner(ctx, next, opt);
        ctx.body = {
            news: news,
            banner: banner
        };
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};

export default Home;
import NewsModel from './../models/NewsModel';
import BannerModel from './../models/BannerModel';

const News = {};
News.list = async(ctx, next) => {
    const opt = {
        page: ctx.query.page_no || 1,
        name: 'news'
    };
    try {
        const news = await NewsModel.list(ctx, next, opt);
        const banner = await BannerModel.banner(ctx, next, opt);

        ctx.body = {
            news: news,
            banner: banner
        };
    } catch (e) {
        ctx.logger.error(new Error(e));
    }
};
News.detail = async(ctx, next) => {
    try {
        const opt = {
            id: ctx.params.id,
        };
        const data = await NewsModel.detail(ctx, next, opt);

        ctx.body = data;
    } catch (e) {
        ctx.logger.error(new Error(e));
    }
};

export default News;
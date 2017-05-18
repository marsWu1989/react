import JoinModel from './../models/JoinModel';
import BannerModel from './../models/BannerModel';

const Join = {};
Join.list = async(ctx, next) => {
    const name = ctx.request.url.split('/')[2];
    const opt = {
        name: name
    };
    try {
        const data = await JoinModel.list(ctx, next);
        const banner = await BannerModel.banner(ctx, next, opt);

        ctx.body = {
            data: data,
            banner: banner
        };
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};
Join.detail = async(ctx, next) => {
    try {
        const opt = {
            id: ctx.params.id
        };
        const data = await JoinModel.detail(ctx, next, opt);

        ctx.body = data;
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};
export default Join;
import BannerModel from './../models/BannerModel';

const Road = {};
Road.road = async(ctx, next) => {
    const name = ctx.request.url.split('/')[2];
    const opt = {
        name: name
    };
    try {
        const banner = await BannerModel.banner(ctx, next, opt);

        ctx.body = {
            banner: banner
        };
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};

export default Road;
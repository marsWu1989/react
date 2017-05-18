import BrandModel from './../models/BrandModel';
import BannerModel from './../models/BannerModel';

const Brand = {};
Brand.list = async(ctx, next) => {
    const name = ctx.request.url.split('/')[2];
    const opt = {
        name: name
    };
    try {
        const data = await BrandModel.list(ctx, next);
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

export default Brand;
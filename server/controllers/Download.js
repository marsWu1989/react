import BannerModel from './../models/BannerModel';

const Download = {};
Download.banner = async(ctx, next) => {
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
    }
};

export default Download;
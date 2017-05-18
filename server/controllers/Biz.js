import ContantModel from './../models/ContantModel';
import CooperateModel from './../models/CooperateModel';
import BannerModel from './../models/BannerModel';

const Biz = {};
Biz.list = async(ctx, next) => {
    const name = ctx.request.url.split('/')[2];
    const opt = {
        name: name
    };
    try {
        const contant = await ContantModel.list(ctx, next);
        const cooperate = await CooperateModel.list(ctx, next);
        const banner = await BannerModel.banner(ctx, next, opt);
        ctx.body = {
            contant: contant,
            cooperate: cooperate,
            banner: banner
        };
    } catch (e) {
        console.log(e);
    }
};

export default Biz;
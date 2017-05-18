import NumModel from './../models/NumModel';
import BannerModel from './../models/BannerModel';

const About = {};
About.about = async(ctx, next) => {
    const name = ctx.request.url.split('/')[2];
    const opt = {
        name: name
    };
    try {
        const num = await NumModel.num(ctx, next);
        const banner = await BannerModel.banner(ctx, next, opt);

        ctx.body = {
            num: num,
            banner: banner
        };
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};

export default About;
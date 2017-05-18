import ReportModel from './../models/NewsModel';
import BannerModel from './../models/BannerModel';

const Report = {};
Report.list = async(ctx, next) => {
    const opt = {
        page: ctx.query.page_no || 1,
        name: 'report'
    };
    try {
        const report = await ReportModel.list(ctx, next, opt);
        const banner = await BannerModel.banner(ctx, next, opt);

        ctx.body = {
            report: report,
            banner: banner
        };
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};

export default Report;
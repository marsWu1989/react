import CooperateModel from './../models/CooperateModel';

const Cooperate = {};
Cooperate.list = async(ctx, next) => {
    try {
        const data = await CooperateModel.list(ctx, next);

        ctx.body = data;
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};

export default Cooperate;
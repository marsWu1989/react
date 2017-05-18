import ContantModel from './../models/ContantModel';

const Contant = {};
Contant.list = async(ctx, next) => {
    try {
        const data = await ContantModel.list(ctx, next);

        ctx.body = data;
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};

export default Contant;
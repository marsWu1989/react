import NumModel from './../models/NumModel';

const Tob = {};
Tob.num = async(ctx, next) => {
    try {
        const data = await NumModel.num(ctx, next);

        ctx.body = data;
    } catch (e) {
        console.log(e);
        // ctx.logger.error(new Error(e));
    }
};

export default Tob;
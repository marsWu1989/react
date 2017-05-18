import 'isomorphic-fetch';

const CooperateModel = {};

CooperateModel.list = async(ctx, next) => {
    try {
        const data = await new Promise((resolve) => {
            fetch('http://www.mojitest.com/gw/getFriend')
                .then((response) => {
                    if (response.status >= 400) {
                        ctx.logger.error('net work fail');
                    }

                    return response.json();
                })
                .then((stories) => {
                    resolve(stories);
                });
        });
        return data;
    } catch (e) {
        ctx.logger.error(e);
    }

    await next();
};

export default CooperateModel;
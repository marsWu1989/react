import 'isomorphic-fetch';

const HomeModel = {};

HomeModel.forecast = async(ctx, next) => {
    try {
        const data = await new Promise((resolve) => {
            fetch('https://tianqi.moji.com/gw/getAllDate')
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

HomeModel.news = async(ctx, next) => {
    try {
        const data = await new Promise((resolve) => {
            fetch('http://tianqi.moji.com/gw/getFeedDate')
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

export default HomeModel;
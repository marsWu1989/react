import 'isomorphic-fetch';

const RealTimeModel = {};

RealTimeModel.num = async(ctx, next) => {
    try {
        const data = await new Promise((resolve) => {
            fetch('http://54.223.77.27:8888/moji/getRequestData', {
                    method: 'POST'
                })
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
        console.log(data);
        return data;
    } catch (e) {
        ctx.logger.error(e);
    }

    await next();
};

export default RealTimeModel;
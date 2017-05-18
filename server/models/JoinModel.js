import 'isomorphic-fetch';

const JoinModel = {};

JoinModel.list = async(ctx, next) => {
    try {
        const data = await new Promise((resolve) => {
            fetch('http://www.mojitest.com/gw/getRecruit')
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
JoinModel.detail = async(ctx, next, opt) => {
    const id = typeof opt !== 'undefined' ? opt.id : 1;
    try {
        const data = await new Promise((resolve) => {
            fetch(
                    `http://www.mojitest.com/gw/getRecruitInfo?id=${id}`, {
                        method: 'JSONP',
                        body: JSON.stringify(),
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
        return data;
    } catch (e) {
        ctx.logger.error(e);
    }

    await next();
};

export default JoinModel;
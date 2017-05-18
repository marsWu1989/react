import 'isomorphic-fetch';

const NewsModel = {};

NewsModel.list = async(ctx, next, opt) => {
    const page = typeof opt !== 'undefined' ? opt.page : 1;
    try {
        const data = await new Promise((resolve) => {
            fetch(`http://www.mojitest.com/gw/getNewsList?page_no=${page}&page_length=5`)
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

NewsModel.detail = async(ctx, next, opt) => {
    const id = typeof opt !== 'undefined' ? opt.id : 1;
    try {
        const data = await new Promise((resolve) => {
            fetch(
                    `http://www.mojitest.com/gw/getNewsInfo?id=${id}`
                )
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

export default NewsModel;
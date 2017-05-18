import 'isomorphic-fetch';

const Banner = {};

Banner.banner = async(ctx, next, opt) => {
    if (!opt.name) {
        opt.name = 'home';
    }
    try {
        const data = await new Promise((resolve) => {
            fetch(`http://www.mojitest.com/gw/getSpecial?sign=mobile_${opt.name}`)
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

export default Banner;
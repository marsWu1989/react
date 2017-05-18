import Koa from 'koa';
import serve from 'koa-static';
import onerror from 'koa-onerror';
import convert from 'koa-convert';
import cors from 'kcors';
import bodyParser from 'koa-bodyparser';

import logger from './../lib/logger';
import routes from './../server/routes';
import render from './../lib/render';
import hum from './../lib/hum';

const app = new Koa();
const port = 9527;

app.context.logger = logger;

app.use(convert(cors()));
app.use(convert(bodyParser()));
app.use(convert(serve(__dirname + '/../assets')));
app.use(hum);

app.use(async(ctx, next) => {
    if (ctx.path.match(/^\/api/)) {
        return await routes.routes()(ctx, next); // 服务端渲染
    }

    return await render(ctx, next); // 客户端渲染
});

app.on('error', function(err, ctx) {
    ctx.logger.error('server error', err);
});

onerror(app);

app.listen(port, () => {
    console.log('Server run on: http://0.0.0.0:%d', port);
});
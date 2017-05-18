import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import configureStore from './../client/store';

import query from './query';
import routes from './../client/routes/server';

// render first screen
const temp = (content, initialState) => (
`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>墨迹天气</title>
<meta content="yes" name="apple-touch-fullscreen">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
<script src="/library/reset.js"></script>
<link rel="stylesheet" href="/styles/app.css">
</head>
<body>
<div id="app">${content}</div>
<script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
<script src="/library/react.js"></script>
<script src="/scripts/app.js"></script>
<script src="https://h5tq.moji.com/html5/js/download_app.js"></script>
<script>
    downloadApp();
</script>
</body>
</html>`
);
// render 404
const notFound = status => (
`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>服务端渲染页面</title>
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
<meta content="yes" name="apple-touch-fullscreen">
<meta name="format-detection" content="telephone=no">
<link rel="stylesheet" href="../styles/app.css">
</head>
<body>
<div id="app">服务器端${status}</div>
</body>
</html>`
);

export default async (ctx, next) => {
    match(
        { routes, location: ctx.url },
        (error, redirectLocation, renderProps) => {
            if (error) {
                ctx.status = 500;
                ctx.body = notFound(ctx.status);
            } else if (redirectLocation) {
                ctx.redirect(redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                const store = configureStore();

                query(ctx, next, store);

                const content = renderToString(
                    <Provider store={store} >
                        <RouterContext {...renderProps} />
                    </Provider>
                );

                ctx.body = temp(content, store.getState());
            } else {
                ctx.status = 404;
                ctx.body = notFound(ctx.status);
            }
        }
    );

    await next();
};

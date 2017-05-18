import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes/client';
import configureStore from './store';

if (typeof window !== 'undefined') require('./scss/client.scss');

const store = configureStore();
render(
    <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);


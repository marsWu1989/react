import React from 'react';
import { Route } from 'react-router';

import Index from './../components/index';
import Download from './../components/download';
import News from './../components/news';
import NewsDetail from './../components/newsDetail';
import Tob from './../components/tob';
import Aabout from './../components/Aabout';
import Aroad from './../components/Aroad';
import Areport from './../components/Areport';
import Abiz from './../components/Abiz';
import Abrand from './../components/Abrand';
import Ajoin from './../components/Ajoin';
import AjoinDetail from './../components/AjoinDetail';

export default (
    <Route>
        <Route path="/" component={Index} />
        <Route path="/mjsoft" component={Download} />
        <Route path="/news" component={News} />
        <Route path="/news/:id" component={NewsDetail} />
        <Route path="/tob" component={Tob} />
        <Route path="/about" component={Aabout} />
        <Route path="/culture" component={Aroad} />
        <Route path="/report" component={Areport} />
        <Route path="/biz" component={Abiz} />
        <Route path="/mojibrand" component={Abrand} />
        <Route path="/job" component={Ajoin} />
        <Route path="/job/:id" component={AjoinDetail} />
    </Route>
);


import React from 'react';
import { Route } from 'react-router';

const Index = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/index').default),
        'index'
    );
const Download = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/download').default),
        'download'
    );
const News = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/news').default),
        'news'
    );
const NewsDetail = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/newsDetail').default),
        'news_detail'
    );
const Tob = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/tob').default),
        'Tob'
    );
const Aabout = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/Aabout').default),
        'Aabout'
    );
const Aroad = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/Aroad').default),
        'Aroad'
    );
const Areport = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/Areport').default),
        'Areport'
    );
const Abiz = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/Abiz').default),
        'Abiz'
    );
const Abrand = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/Abrand').default),
        'Abrand'
    );
const Ajoin = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/Ajoin').default),
        'Ajoin'
    );
const AjoinDetail = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/AjoinDetail').default),
        'AjoinDetail'
    );
export default (
    <Route>
        <Route path="/" getComponent={Index} />
        <Route path="/mjsoft" getComponent={Download} />
        <Route path="/news" getComponent={News} />
        <Route path="/news/:id" getComponent={NewsDetail} />
        <Route path="/tob" getComponent={Tob} />
        <Route path="/about" getComponent={Aabout} />
        <Route path="/culture" getComponent={Aroad} />
        <Route path="/report" getComponent={Areport} />
        <Route path="/biz" getComponent={Abiz} />
        <Route path="/mojibrand" getComponent={Abrand} />
        <Route path="/job" getComponent={Ajoin} />
        <Route path="/job/:id" getComponent={AjoinDetail} />
    </Route>
);

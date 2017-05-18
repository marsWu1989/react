import React from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import NewsInfo from './../newsInfo';
import ToTop from './../toTop';

import s from './NewsDetail';


function NewsDetail(data) {
    return (
        <div className={s.detail}>
            <Header data={data.data.forecast} />
            <Nav />
            <NewsInfo detail={data.data.detail} id={data.params.id} />
            <ToTop />
        </div>
    );
}

export default connect(
    state => ({
        data: state,
    })
)(NewsDetail);

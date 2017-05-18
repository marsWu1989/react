import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import ToTop from './../toTop';
import Banner from './../banner';
import NewsList from './../newsList';
import NewsNext from './../newsNext';
import Loading from './../loading';

import { newsPost } from '../../actions/news';

import s from './News';


class News extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(newsPost(1));
    }
    render() {
        const { forecast, news, route } = this.props;
        if (!news.banner) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className={s.box}>
                    <Header data={forecast} />
                    <Nav router={route.path} />
                    <Banner data={news.banner} />
                    <NewsList data={news.items} />
                    <NewsNext page={news.page_no} />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { news, forecast } = state;

    return { news, forecast };
};

export default connect(mapStateToProps)(News);


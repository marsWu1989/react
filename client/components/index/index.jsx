import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import Banner from './../banner';
import IndexWeather from './../indexWeather';
import IndexInfo from './../indexInfo';
import ToTop from './../toTop';
import Loading from './../loading';
import s from './Home';

import { indexNewsPost } from '../../actions/indexNews';

class Index extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(indexNewsPost());
    }
    render() {
        const { forecast, indexNews, route } = this.props;
        if (!indexNews.data.banner) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className={s.box}>
                    <Header data={forecast} />
                    <Nav router={route.path} />
                    <Banner data={indexNews.data.banner} />
                    <IndexWeather />
                    <IndexInfo data={indexNews.data.news} />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { indexNews, forecast } = state;

    return { indexNews, forecast };
};

export default connect(mapStateToProps)(Index);


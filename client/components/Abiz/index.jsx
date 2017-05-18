import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import Banner from './../banner';
import Anav from './../Anav';
import AbizDetail from './../AbizDetail';
import AbizInfo from './../AbizInfo';
import AbizContant from './../AbizContant';
import AbizCooperate from './../AbizCooperate';
import ToTop from './../toTop';
import Loading from './../loading';
import s from './Abiz';

import { bizPost } from '../../actions/biz';

class Abiz extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(bizPost());
    }
    render() {
        const { forecast, biz, route } = this.props;
        if (!biz.data.contant) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className={s.box}>
                    <Header data={forecast} />
                    <Nav />
                    <Banner data={biz.data.banner} />
                    <Anav router={route.path} />
                    <AbizDetail />
                    <AbizInfo />
                    <AbizContant data={biz.data.contant} />
                    <AbizCooperate data={biz.data.cooperate} />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { biz, forecast } = state;

    return { biz, forecast };
};

export default connect(mapStateToProps)(Abiz);


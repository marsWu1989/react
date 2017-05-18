import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import Banner from './../banner';
import Anav from './../Anav';
import AroadYear from './../AroadYear';
import ToTop from './../toTop';
import Loading from './../loading';
import s from './Aroad';

import { roadPost } from '../../actions/road';

class Aroad extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(roadPost());
    }
    render() {
        const { forecast, road, route } = this.props;
        if (!road.data.banner) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className={s.box}>
                    <Header data={forecast} />
                    <Nav />
                    <Banner data={road.data.banner} />
                    <Anav router={route.path} />
                    <AroadYear />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { road, forecast } = state;

    return { road, forecast };
};

export default connect(mapStateToProps)(Aroad);


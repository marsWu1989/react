import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import Banner from './../banner';
import Anav from './../Anav';
import AbrandDetail from './../AbrandDetail';
import ToTop from './../toTop';
import Loading from './../loading';
import s from './Abrand';

import { brandPost } from '../../actions/brand';

class Abrand extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(brandPost());
    }
    render() {
        const { forecast, brand, route } = this.props;
        if (!brand.data.data) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className={s.box}>
                    <Header data={forecast} />
                    <Nav />
                    <Banner data={brand.data.banner} />
                    <Anav router={route.path} />
                    <AbrandDetail data={brand.data.data} />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { brand, forecast } = state;

    return { brand, forecast };
};

export default connect(mapStateToProps)(Abrand);


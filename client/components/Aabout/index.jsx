import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import Banner from './../banner';
import Anav from './../Anav';
import AaboutDetail from './../AaboutDetail';
import AaboutMap from './../AaboutMap';
import AaboutCount from './../AaboutCount';
import ToTop from './../toTop';
import s from './Aabout';
import Loading from './../loading';

import { aboutPost } from '../../actions/about';

class Aabout extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(aboutPost());
    }
    render() {
        const { forecast, about, route } = this.props;
        if (!about.data.num || !about.data.banner) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className={s.box}>
                    <Header data={forecast} />
                    <Nav />
                    <Banner data={about.data.banner} />
                    <Anav router={route.path} />
                    <AaboutDetail />
                    <AaboutMap />
                    <AaboutCount data={about.data.num} />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { about, forecast } = state;

    return { about, forecast };
};

export default connect(mapStateToProps)(Aabout);


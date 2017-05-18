import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import Banner from './../banner';
import Anav from './../Anav';
import AjoinEnvironment from './../AjoinEnvironment';
import AjoinJob from './../AjoinJob';
import AjoinMap from './../AjoinMap';
import ToTop from './../toTop';
import Loading from './../loading';
import s from './Ajoin';

import { joinPost } from '../../actions/join';

class Ajoin extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(joinPost());
    }
    render() {
        const { forecast, join, route } = this.props;
        if (!join.data.banner) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className={s.box}>
                    <Header data={forecast} />
                    <Nav />
                    <Banner data={join.data.banner} />
                    <Anav router={route.path} />
                    <AjoinEnvironment />
                    <AjoinJob data={join.data.data} />
                    <AjoinMap />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { join, forecast } = state;

    return { join, forecast };
};

export default connect(mapStateToProps)(Ajoin);


import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import ToTop from './../toTop';
import Banner from './../banner';
import Dphone from './../Dphone';
import Dpad from './../Dpad';
import Dinter from './../Dinter';
import Loading from './../loading';

import s from './Download';

import { downloadPost } from '../../actions/download';

class Download extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(downloadPost());
    }
    render() {
        const { forecast, download, route } = this.props;
        if (!download.data.banner) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className={s.box}>
                    <Header data={forecast} />
                    <Nav router={route.path} />
                    <Banner data={download.data.banner} />
                    <Dphone />
                    <Dpad />
                    <Dinter />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { download, forecast } = state;

    return { download, forecast };
};

export default connect(mapStateToProps)(Download);


import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import Banner from './../banner';
import Anav from './../Anav';
import AreportList from './../AreportList';
import AreportNext from './../AreportNext';
import ToTop from './../toTop';
import s from './Areport';

import { reportPost } from '../../actions/report';

class Areport extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(reportPost());
    }
    render() {
        const { forecast, report, route } = this.props;
        if (!report.items || !report.banner) {
            return (
                <div>loading</div>
            );
        } else {
            return (
                <div className={s.box}>
                    <Header data={forecast} />
                    <Nav />
                    <Banner data={report.banner} />
                    <Anav router={route.path} />
                    <AreportList list={report.items} />
                    <AreportNext />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { report, forecast } = state;

    return { report, forecast };
};

export default connect(mapStateToProps)(Areport);


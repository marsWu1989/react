import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../header';
import Nav from './../nav';
import Tbanner from './../Tbanner';
import Tinfo from './../Tinfo';
import Tprice from './../Tprice';
import Tuse from './../Tuse';
import Tcooperate from './../Tcooperate';
import Tcontact from './../Tcontact';
import ToTop from './../toTop';
import Loading from './../loading';
import s from './Tob';

import { numPost } from '../../actions/num';

class Tob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touch: false
        };
    }
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(numPost());
    }
    onTouchStart() {
        const l = event.touches.length;
        if (l === 1) {
            this.setState({
                touch: true
            });
        } else {
            this.setState({
                touch: false
            });
        }
    }
    render() {
        const { forecast, num } = this.props;
        if (!num.data) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className={s.box} onTouchStart={() => this.onTouchStart()}>
                    <Header data={forecast} />
                    <Nav />
                    <Tbanner data={num} isTouch={this.state.touch} />
                    <Tinfo />
                    <Tprice />
                    <Tuse />
                    <Tcooperate />
                    <Tcontact />
                    <ToTop />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { num, forecast } = state;

    return { num, forecast };
};

export default connect(mapStateToProps)(Tob);


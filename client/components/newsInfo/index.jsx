import React, { Component } from 'react';
import { connect } from 'react-redux';

import { detailPost } from './../../actions/detail';

import s from './NewsInfo';

class NewsInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { // init top weather hide
            page: 1
        };
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(detailPost(this.props.id));
    }
    render() {
        const img = [];
        const data = this.props.detail.data;
        if (data.img !== '') {
            img.push(
                <img src={data.img} alt="pic" />
            );
        }
        return (
            <div className={s.info}>
                <p className={s.text} dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        );
    }
}


export default connect()(NewsInfo);

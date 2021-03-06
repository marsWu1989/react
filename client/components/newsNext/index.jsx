import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newsPost } from './../../actions/news';

import s from './NewsNext';

class NewsNext extends Component {
    constructor(props) {
        super(props);
        this.state = { // init top weather hide
            page: 1
        };
    }
    _getList() {
        const page = this.state.page + 1;
        const { dispatch } = this.props;
        dispatch(newsPost(page));
        this.setState({
            page: page
        });
    }
    render() {
        return (
            <div className={s.newsNext} onClick={() => this._getList()}>
                <span>查看更多</span>
            </div>
        );
    }
}


export default connect()(NewsNext);

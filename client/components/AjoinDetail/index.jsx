import React, { Component } from 'react';
import { connect } from 'react-redux';

import { joinDetailPost } from './../../actions/joinDetail';

import s from './AjoinDetail';

class AjoinDetail extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(joinDetailPost(this.props.params.id));
    }
    render() {
        const item = this.props.data.joinDetail.data;
        return (
            <div className={s.AjoinDetail}>
                <div className={s.title}>{item.title}</div>
                <div className={s.text}>
                    <h3>岗位职责</h3>
                    <div dangerouslySetInnerHTML={{ __html: item.gwzz }} />
                </div>
                <div className={s.text}>
                    <h3>任职要求</h3>
                    <div dangerouslySetInnerHTML={{ __html: item.rzyq }} />
                </div>
                <div className={s.button}><a href="mailto:hr@moji.com">申请职位</a></div>
            </div>
        );
    }
}

export default connect(
    state => ({
        data: state,
    })
)(AjoinDetail);


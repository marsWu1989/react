import React, { Component } from 'react';

import s from './AaboutCount';

class AaboutCount extends Component {
    formatNum() {
        let d = this.props.data.data;
        d = d ? d[0].num : null;
        const arr = [];
        if (d) {
            const rgx = /(\d+)(\d{3})/;
            while (rgx.test(d)) {
                d = d.replace(rgx, '$1' +
                    ',' +
                    '$2'
                );
            }
            for (let i = 0; i < d.length; i++) {
                if (d[i] !== ',') {
                    arr.push(<li className={s.count} key={i}>{d[i]}</li>);
                } else {
                    arr.push(<li className={s.default} key={i}>{d[i]}</li>);
                }
            }
        }
        return arr;
    }
    render() {
        return (
            <div className={s.AaboutCount}>
                <h3>墨迹天气实时请求数</h3>
                <ul>
                    {this.formatNum()}
                </ul>
                <h3>墨迹天气API接口累计请求数</h3>
                <ul>
                    {this.formatNum()}
                </ul>
            </div>
        );
    }
}

export default AaboutCount;

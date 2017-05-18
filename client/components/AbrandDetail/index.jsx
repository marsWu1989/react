import React, { Component } from 'react';
// import { findDOMNode } from 'react-dom';

import s from './AbrandDetail';

class AbrandDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { // init width
            width: 0,
        };
    }
    getData() {
        const list = this.props.data.data.rows;
        const arr = [];
        for (const key in list) {
            if ({}.hasOwnProperty.call(list, key)) {
                const logos = [];
                const imgs = [];
                const item = list[key];
                for (let i = 0; i < item.img[1].length; i++) {
                    logos.push(
                        <li key={item.img[1][i].id}>
                            <i><img src={item.img[1][i].img} alt={item.img[1][i].desc} /></i>
                        </li>
                    );
                }
                for (let i = 0; i < item.img[2].length; i++) {
                    imgs.push(
                        <li key={item.img[2][i].id} ref="img">
                            <i><img src={item.img[2][i].img} alt={item.img[2][i].desc} /></i>
                            <span>{item.img[2][i].desc}</span>
                        </li>
                    );
                }
                arr.push(
                    <li key={item.id}>
                        <div className={s.brandList}>
                            <ul>
                                {logos}
                            </ul>
                        </div>
                        <div className={s.title}>{item.title}</div>
                        <div className={s.time}>{item.term_date}</div>
                        <div className={s.desc}>
                            {item.description}
                        </div>
                        <div className={s.activityList}>
                            <ul
                                ref="picList"
                                style={{
                                    width: this.initElWidth()[key]
                                }}
                            >
                                {imgs}
                            </ul>
                        </div>
                    </li>
                );
            }
        }
        return arr;
    }
    initElWidth() {
        const list = this.props.data.data.rows;
        const width = {};
        if (list) {
            // const childrenWidth = findDOMNode(this.refs.picList).children[0].clientWidth;
            for (const key in list) {
                if ({}.hasOwnProperty.call(list, key)) {
                    const item = list[key];
                    width[key] = item.img[2].length * 150;
                }
            }
        }
        return width;
    }
    render() {
        return (
            <div className={s.AbrandDetail} ref="AbrandDetail">
                <ul>
                    {this.getData()}
                </ul>
            </div>
        );
    }
}

export default AbrandDetail;

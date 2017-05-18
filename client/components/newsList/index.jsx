import React, { Component } from 'react';

import s from './NewsList';

class NewsList extends Component {
    constructor(props) {
        super(props);
        const data = this.props.data;
        this.state = { // init news list
            list: data
        };
    }
    render() {
        const data = this.props.data;
        const news = [];

        for (let i = 0; i <= data.length - 1; i++) {
            const item = data[i];
            const img = [];
            const time = new Date(item.update_time * 1000).toLocaleString().substr(0, 10).replace(/\//g, '-');
            const url = `/news/${item.id}`;
            if (item.img !== '') {
                img.push(
                    <img src={item.img} alt="pic" key={i} />
                );
            }
            news.push(
                <li className={s.item} key={item.id}>
                    <p className={s.title}>
                        <a href={url}>{item.title} 【{time}】</a>
                    </p>
                    <p className={s.text}>{item.content}</p>
                    <p className={s.img}>{img}</p>
                </li>
            );
        }
        return (
            <div className={s.newsList}>
                <ul>
                    { news }
                </ul>
            </div>
        );
    }
}

export default NewsList;

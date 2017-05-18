import React from 'react';
import { Link } from 'react-router';

import s from './IndexInfo';

function IndexInfo(news) {
    const list = news.data.data;
    const arr = [];
    if (list) {
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            arr.push(
                <li className={s.item} key={i}>
                    <p className={s.pic}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <img src={item.img} alt="pic" />
                        </a>
                    </p>
                    <p className={s.text}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                        <b>{item.date}</b>
                        <span>{item.description}</span>
                    </p>
                </li>
            );
        }
    }
    return (
        <div className={s.info}>
            <title className={s.title} />
            <div className={s.more}><Link to="/news">更多资讯</Link></div>
            <div className={s.list}>
                <ul>
                    {
                        arr
                    }
                </ul>
            </div>
        </div>
    );
}

export default IndexInfo;

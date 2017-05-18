import React from 'react';

import s from './AreportList';

function AreportList(list) {
    const data = list.list;
    const reports = [];
    for (let i = 0; i <= data.length - 1; i++) {
        const item = data[i];
        const img = [];
        const time = new Date(item.update_time * 1000).toLocaleString().substr(0, 10).replace(/\//g, '-');
        if (item.img !== '') {
            img.push(
                <img src={item.img} alt="pic" key={item.id} />
            );
        }
        reports.push(
            <li className={s.item} key={item.id}>
                <h2><a href={item.url}>{item.title}</a></h2>
                <div className={s.time}>
                    <b>墨迹动态</b>
                    <span>{time}</span>
                </div>
                <p className={s.text}>{item.description}</p>
                <p className={s.img}>
                    {img}
                </p>
            </li>
        );
    }
    return (
        <div className={s.AreportList}>
            <ul>
                {reports}
            </ul>
        </div>
    );
}

export default AreportList;

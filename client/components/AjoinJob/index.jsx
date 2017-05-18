import React from 'react';

import s from './AjoinJob';

function AjoinJob(job) {
    const list = job.data.data;
    const arr = [];
    for (let i = 0; i <= list.length - 1; i++) {
        const item = list[i];
        const url = `/job/${item.id}`;
        arr.push(
            <li className={s.IOS} key={item.id}>
                <h3>{item.title}</h3>
                <i><img src={item.img} alt={item.title} /></i>
                <a href={url}>查看职位</a>

            </li>
        );
    }
    return (
        <div className={s.AjoinJob}>
            <div className={s.title} />
            <div className={s.list}>
                <ul>
                    {arr}
                </ul>
            </div>
        </div>
    );
}

export default AjoinJob;

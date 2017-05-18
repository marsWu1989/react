import React from 'react';

import s from './AbizCooperate';

function AbizCooperate(cooperate) {
    const list = cooperate.data.data;
    const arr = [];
    for (let i = 0; i <= list.length - 1; i++) {
        const item = list[i];
        arr.push(
            <li className={s.img} key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.title} />
                </a>
            </li>
        );
    }
    return (
        <div className={s.AbizCooperate}>
            <div className={s.title} />
            <div className={s.list}>
                <ul>
                    {arr}
                </ul>
            </div>
        </div>
    );
}

export default AbizCooperate;

import React from 'react';

import s from './AbizContant';

function AbizContant(contant) {
    const list = contant.data.data;
    const arr = [];
    if (list) {
        for (let i = 0; i <= list.length - 1; i++) {
            const item = list[i];
            arr.push(
                <li className={s.item} key={item.id}>
                    <h3 className={s.way}>{item.title}</h3>
                    <p className={s.name}>{item.name}</p>
                    <p className={s.qq}>{item.qq}</p>
                    <p className={s.phone}>{item.tel}</p>
                    <p className={s.mail}>{item.email}</p>
                </li>
            );
        }
    }
    return (
        <div className={s.AbizContant}>
            <div className={s.title} />
            <div className={s.list}>
                <ul>
                    {arr}
                </ul>
            </div>
        </div>
    );
}

export default AbizContant;

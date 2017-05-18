import React from 'react';

import s from './Tuse';

function Tuse() {
    return (
        <div className={s.Tuse}>
            <div className={s.title}>他们都在使用墨迹天气</div>
            <ul className={s.list}>
                <li className={s.stateGrid} />
                <li className={s.amap} />
                <li className={s.coca} />
            </ul>
            <line className={s.line} />
        </div>
    );
}

export default Tuse;

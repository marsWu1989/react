import React from 'react';

import s from './Tcooperate';

function Tcooperate() {
    return (
        <div className={s.Tcooperate}>
            <div className={s.title}>合作伙伴</div>
            <ul className={s.list}>
                <li className={s.aliyun} />
                <li className={s.qqBrowser} />
                <li className={s.JD} />
                <li className={s.alipay} />
                <li className={s._58} />
                <li className={s.didi} />
            </ul>
            <line className={s.line} />
        </div>
    );
}

export default Tcooperate;

import React from 'react';
import { Link } from 'react-router';

import s from './AjoinEnvironment';

function AjoinEnvironment() {
    return (
        <div className={s.AjoinEnvironment}>
            <div className={s.img} />
            <div className={s.title} />
            <div className={s.desc}>
                <ul>
                    <li>
                        <i className={s.number01} />
                        <p className={s.text}>
                            整洁宽松的办公区，让你可以轻松高效的工作<br />
                            休闲舒适的休息区，让你的生活充满乐趣
                        </p>
                    </li>
                    <li>
                        <i className={s.number02} />
                        <p className={s.text}>
                            富有竞争力的薪酬保障，弹性的工作时间<br />
                            五天工作日，每天8小时工作时间
                        </p>
                    </li>
                    <li>
                        <i className={s.number03} />
                        <p className={s.text}>
                            完善的社会保障、住房公积金<br />
                            带薪年假、带薪病假10天<br />
                            工作所需的相关补助，如午餐补助等<br />
                            年底的绩效奖金
                        </p>
                    </li>
                </ul>
            </div>
            <div className={s.mail}>简历发送至：<Link to="mailto:hr@moji.com">hr@moji.com</Link></div>
        </div>
    );
}

export default AjoinEnvironment;

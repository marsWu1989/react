import React from 'react';

import s from './AbizInfo';

function AbizInfo() {
    return (
        <div className={s.AbizInfo}>
            <ul>
                <li className={s.item}>
                    <div className={s.title}>商务合作</div>
                    <div className={s.desc}>
                        国内墨迹天气产品推广，包
                        括Android及iOS的激活推
                        广，市场渠道换量及付费推
                        广合作，App产品内容层面
                        合作。
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.title}>品牌合作</div>
                    <div className={s.desc}>
                        基于品牌广告在墨迹天气APP
                        端推广合作需求，包括品牌广
                        告投放，原生性植入合作，广
                        告代理公司合作。
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.title}>海外合作</div>
                    <div className={s.desc}>
                        海外CP及应用市场换量合作，
                        海外手机厂商内置，及定制版
                        合作模式。
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.title}>TO B天气服务</div>
                    <div className={s.desc}>
                        为行业客户提供最专业的全球
                        气象服务，内容全面、数据专
                        业精准、系统稳定
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default AbizInfo;

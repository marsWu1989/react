import React from 'react';

import s from './IndexWeather';

const IndexWeather = () => (
    <div className={s.weather}>
        <title className={s.title} />
        <phone className={s.phone} />
        <div className={s.desc}>
            <div className={s.time}>
                <b>分钟级</b>
                <span>短时预报分钟</span>
            </div>
            <div className={s.KM}>
                <b>公里级</b>
                <span>预报范围缩小到1公里</span>
            </div>
            <div className={s.AI}>
                <b>AI智能</b>
                <span>机械学习技术结合<br />传统数值模式系统</span>
            </div>
            <div className={s.view}>
                <b>可视化</b>
                <span>全球数据预报可视化<br />世界领先模式同化系统</span>
            </div>
        </div>
    </div>
);

export default IndexWeather;

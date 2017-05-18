import React from 'react';

import s from './Tinfo';

function Tinfo() {
    return (
        <div className={s.Tinfo}>
            <div className={s.title}>为企业和开发者提供最专业的<br />全球气象数据服务</div>
            <div className={s.price}>
                <div className={s.priceIcon} />
                <div className={s.priceText}>
                    <b>0.88</b>
                    <span>万次起</span>
                </div>
                <div className={s.btu}>了解更多</div>
            </div>
            <div className={s.desc}>
                <ul>
                    <li className={s.item}>
                        <div className={s.overallIcon}>内容全面</div>
                        <div className={s.descText}>
                            提供包括国内4000多个城市及景点以及全球20万个城市的实况、预报、AQI、生活指数、预警等天气数据。
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={s.accurateIcon}>专业精准</div>
                        <div className={s.descText}>
                            国内外多家权威数据源融合，墨迹天气UGC数据、时   景数据等作为补充。
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={s.stableIcon}>系统稳定</div>
                        <div className={s.descText}>
                            完美支持高并发，更合理的负载均衡系统服务可用性达到99.9%以上。
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Tinfo;

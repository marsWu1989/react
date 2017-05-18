import React from 'react';

import s from './AbizDetail';

function AbizDetail() {
    return (
        <div className={s.AbizDetail}>
            <div className={s.title} />
            <div className={s.text}>
                <p>
                    北京墨迹风云科技股份有限公司，目前主推出墨迹天气软件，
                    现已稳居APP排行榜第一阵营，且持续占据天气类软件第一位置；
                    合作包括国内墨迹天气产品推广，Android及iOS的激活推广，
                    市场渠道换量及付费推广合作，App产品内容层面合作；
                    以及基于品牌广告在墨迹天气APP端推广合作需求，包括品牌广告投放，
                    原生性植入合作，广告代理公司合作；海外CP及应用市场换量合作，
                    海外手机厂商内置，及定制版合作模式。同时现已开放TO B的天气服务，
                    为广大合作伙伴提供更好的气象服务。
                    欢迎广大品牌商、应用市场、客户端、手机厂商等与我们联系，洽谈合作。
                </p>
            </div>
        </div>
    );
}

export default AbizDetail;

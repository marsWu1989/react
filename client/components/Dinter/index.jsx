import React from 'react';

import s from './Dinter';

const Dinter = () => (
    <div className={s.Dinter}>
        <div className={s.title}>国际版</div>
        <div className={s.items}>
            <div className={s.item}>
                <p className={s.iphone}>
                    <icon className={s.icon} />
                    <b>iPhone v2.4</b>
                    <span>2014.08.14</span>
                </p>
                <a
                    href="http://moji.com/mjchann/channel.php?url=https://itunes.apple.com/us/app/moweather/id635166892?mt=8&channelid=6666&userid="
                    className={s.btu}
                >立即下载</a>
            </div>
            <div className={s.item}>
                <p className={s.and}>
                    <icon className={s.icon} />
                    <b>Android v1.4</b>
                    <span>2014.07.31</span>
                </p>
                <a
                    href="http://download.moji001.com/download/MoWeather-V1.40.05-C7000.apk"
                    className={s.btu}
                >立即下载</a>
            </div>
        </div>
        <pic className={s.pic} />
    </div>
);

export default Dinter;

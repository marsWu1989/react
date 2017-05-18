import React from 'react';

import s from './Dphone';

const Dphone = () => (
    <div className={s.Dphone}>
        <div className={s.title}>手机版</div>
        <div className={s.items}>
            <div className={s.item}>
                <p className={s.iphone}>
                    <icon className={s.icon} />
                    <b>iPhone v6.3.0</b>
                    <span>2017.03.22</span>
                </p>
                <a
                    href="http://mojichina.com/mjchann/channel.php?url=http://itunes.apple.com/cn/app/mo-ji-tian-qi-guan-fang/id434209233?mt=8&channelid=9001&userid="
                    className={s.btuBlue}
                >立即下载</a>
            </div>
            <div className={s.item}>
                <p className={s.android}>
                    <icon className={s.icon} />
                    <b>Android v6.3.1</b>
                    <span>2017.04.06</span>
                </p>
                <a
                    href="http://download.moji001.com/download/MojiWeather-V6.0301.02-release-c8888.apk"
                    className={s.btuBlue}
                >立即下载</a>
            </div>
            <div className={s.item}>
                <p className={s.winPhone}>
                    <b>Windows Phone 1.5</b>
                    <span>2014.08.14</span>
                </p>
                <a
                    href="http://www.windowsphone.com/zh-cn/store/app/%E5%A2%A8%E8%BF%B9%E5%A4%A9%E6%B0%94/735c6168-9ec9-46bb-ab1d-fc6ae573cff3"
                    className={s.btuNoBg}
                >立即下载</a>
            </div>
            <div className={s.item}>
                <p className={s.symbian}>
                    <b>Symbian OS v6.0</b>
                    <span>2012.11.06</span>
                </p>
                <a
                    href="http://download.moji001.com/download/MJWeather_S60V3_6.0_signed.sis"
                    className={s.btuNoBg}
                >立即下载</a>
            </div>
        </div>
        <pic className={s.pic} />
    </div>
);

export default Dphone;

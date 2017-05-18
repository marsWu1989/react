import React from 'react';

import s from './Dpad';

const Dpad = () => (
    <div className={s.Dpad}>
        <div className={s.title}>Pad版</div>
        <div className={s.items}>
            <div className={s.item}>
                <p className={s.ipad}>
                    <icon className={s.icon} />
                    <b>iPad v2.8.1</b>
                    <span>2014.07.07</span>
                </p>
                <a
                    href="http://mojichina.com/mjchann/channel.php?url=http://itunes.apple.com/cn/app//id487161848?mt=8&channelid=10001&userid="
                    className={s.btu}
                >立即下载</a>
            </div>
            <div className={s.item}>
                <p className={s.win}>
                    <icon className={s.icon} />
                    <b>Windows 8 v2.2</b>
                    <span>2014.04.01</span>
                </p>
                <a
                    href="http://download.moji001.com/download/MoWeatherInstall_2.0.1.3.exe"
                    className={s.btu}
                >立即下载</a>
            </div>
        </div>
        <pic className={s.pic} />
    </div>
);

export default Dpad;

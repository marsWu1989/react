import React from 'react';

import s from './AroadYear';

function AroadYear() {
    return (
        <div className={s.AroadYear}>
            <div className={s.dashline} />
            <ul className={s.list}>
                <li className={s.item}>
                    <dl>
                        <dt className={s.blue}>2016</dt>
                        <dd className={s.month_en_blue}>J u n</dd>
                        <dd className={s.month_cn_blue}>/ 0 6</dd>
                    </dl>
                    <div className={s.icon}>
                        <div className={s.i_2016} />
                    </div>
                    <p>
                        墨迹注册用户过5亿，月活跃用户过1亿，在同类软件市场占有率达53.9%。
                        空气果2诞生，推出不同版本，增加了甲醛功能。践行“天气+”，
                        以气象大数据为基础，将天气作为入口，提供给用户更多生活化、场景化的服务。
                    </p>
                </li>
                <li className={s.item}>
                    <dl>
                        <dt>2015</dt>
                        <dd className={s.month_en}>D e c</dd>
                        <dd className={s.month_cn}>/ 1 2</dd>
                    </dl>
                    <div className={s.icon}>
                        <div className={s.i_2015} />
                    </div>
                    <p>
                        基于上空气果一代的优势，迭代推出空气果1S。
                        交互更好、传感器精度更高、系统更稳定。截至12月底，
                        墨迹天气积累用户达4.7亿，每天超过5亿次的天气查询需求。
                    </p>
                </li>
                <li className={s.item}>
                    <dl>
                        <dt>2014</dt>
                        <dd className={s.month_en}>D e c</dd>
                        <dd className={s.month_cn}>/ 1 2</dd>
                    </dl>
                    <div className={s.icon}>
                        <div className={s.i_2014_12} />
                    </div>
                    <p>
                        逐步积累了4亿用户，自动适配多种语言，用户覆盖包括中国大陆、港澳台，日韩及东南亚、欧美等全球各地用户。
                    </p>
                </li>
                <li className={s.item}>
                    <dl>
                        <dt className={s.blue}>2014</dt>
                        <dd className={s.month_en_blue}>  M a y</dd>
                        <dd className={s.month_cn_blue}>/ 0 5</dd>
                    </dl>
                    <div className={s.icon}>
                        <div className={s.i_2014_5} />
                    </div>
                    <p>
                        墨迹天气将软件延伸到硬件，首次发布空气检测智能硬件——空气果。
                        不仅提供户外的天气信息还关心用户室内空气质量，
                        室内和室外的结合，将人们的生活场景描述的更加完整化。
                    </p>
                </li>
                <li className={s.item}>
                    <dl>
                        <dt>2013</dt>
                    </dl>
                    <div className={s.icon}>
                        <div className={s.i_2013} />
                    </div>
                    <p>
                        首创时景天气——实时天气照片的众包平台。
                        通过智能识别，根据照片信息自动进行天气信息校正，
                        实现了UGC辅助PGC，PGC指导UGC的良性循环。
                    </p>
                </li>
                <li className={s.item}>
                    <dl>
                        <dt>2012</dt>
                        <dd className={s.month_en}>  D e c</dd>
                        <dd className={s.month_cn}>/ 1 2</dd>
                    </dl>
                    <div className={s.icon}>
                        <div className={s.i_2012} />
                    </div>
                    <p>注册用户过1亿</p>
                </li>
                <li className={s.item}>
                    <dl>
                        <dt>2011</dt>
                    </dl>
                    <div className={s.icon}>
                        <div className={s.i_2011} />
                    </div>
                    <p>
                        IPhone版本上线，短短2个月下载用户破400万，获中国手机软件评选TOP9。
                        同年联合中国气象频道率先推出灾害预警，成为用户获取气象灾害信息的新渠道。
                    </p>
                </li>
                <li className={s.item}>
                    <dl>
                        <dt className={s.blue}>2010</dt>
                    </dl>
                    <div className={s.icon}>
                        <div className={s.i_2010} />
                    </div>
                    <p>北京墨迹风云科技股份有限公司成立，当年墨迹天气ＡＰＰ获得腾讯年度最佳生活应用第一名。</p>
                </li>
                <li className={s.item}>
                    <dl>
                        <dt className={s.blue}>2009</dt>
                        <dd className={s.month_en_blue}>  M a y</dd>
                        <dd className={s.month_cn_blue}>/ 0 5</dd>
                    </dl>
                    <div className={s.icon}>
                        <div className={s.i_2009} />
                    </div>
                    <p>墨迹天气发布第一个版本。</p>
                </li>
            </ul>
        </div>
    );
}

export default AroadYear;


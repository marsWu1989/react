import React from 'react';
import { Link } from 'react-router';

import s from './Anav';

function Anav(r) {
    const router = r.router;
    let aboutName = s.about;
    let roadName = s.road;
    let reportName = s.report;
    let bizName = s.biz;
    let brandName = s.brand;
    let joinName = s.join;
    switch (router) {
        case '/about':
            aboutName = s.aboutCur;
            break;
        case '/culture':
            roadName = s.roadCur;
            break;
        case '/report':
            reportName = s.reportCur;
            break;
        case '/biz':
            bizName = s.bizCur;
            break;
        case '/mojibrand':
            brandName = s.brandCur;
            break;
        case '/job':
            joinName = s.joinCur;
            break;
        default:
            aboutName = s.aboutCur;
    }
    return (
        <div className={s.Anav}>
            <ul>
                <li className={aboutName}><Link to="/about">关于墨迹</Link></li>
                <li className={roadName}><Link to="/culture">墨迹之路</Link></li>
                <li className={reportName}><Link to="/report">墨迹动态</Link></li>
                <li className={bizName}><Link to="/biz">商务合作</Link></li>
                <li className={brandName}><Link to="/mojibrand">品牌案例</Link></li>
                <li className={joinName}><Link to="/job">加入我们</Link></li>
            </ul>
        </div>
    );
}

export default Anav;


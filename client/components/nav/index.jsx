import React, { Component } from 'react';
import { Link } from 'react-router';

import s from './Nav';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { // init menu
            display: false
        };
    }
    handleShowOrHide() {
        this.setState({ // change menu state
            display: !this.state.display
        });
    }
    render() {
        const router = this.props.router;
        let homeName = s.home;
        let downloadName = s.download;
        switch (router) {
            case '/':
                homeName = s.homeCur;
                break;
            case '/mjsoft':
                downloadName = s.downloadCur;
                break;
            default:
                homeName = s.home;
                downloadName = s.download;
        }
        let cName = s.hide;
        if (this.state.display) { // change menu class
            cName = s.show;
        } else {
            cName = s.hide;
        }
        return (
            <div className={s.nav}>
                <Link to="/" className={homeName} />
                <Link to="/mjsoft" className={downloadName} />
                <button className={s.menu} onClick={() => this.handleShowOrHide()} />
                <div className={cName} onClick={() => this.handleShowOrHide()}>
                    <ul className={s.items}>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/mjsoft">下载</Link></li>
                        <li><Link to="/tob">天气服务</Link></li>
                        <li><Link to="/news">资讯</Link></li>
                        <li><Link to="/about">关于墨迹</Link></li>
                    </ul>
                    <div className={s.bg} />
                </div>
            </div>
        );
    }
}

export default Nav;

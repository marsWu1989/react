import React, { Component } from 'react';

import s from './Header';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { // init top weather hide
            display: false
        };
    }
    handleShowOrHide() {
        this.setState({ // change display state
            display: !this.state.display
        });
    }
    render() {
        const data = this.props.data.data;
        const alert = [];
        const forecast = [];
        if (data.alerts.length > 0) { // no alert no show
            const alertLevel = s['level_' + data.alerts[0].level_no];
            alert.push(
                <div className={s.alertContent} key="alert">
                    <i className={alertLevel}>
                        <img src={`http://cdn.moji.com/f5/weather/warn/warn_${data.alerts[0].name_no}.png`} alt={data.alerts[0].name_no} />
                    </i>
                    <b>{data.alerts[0].type}预警</b>
                </div>
            );
        }
        for (let i = 0; i <= data.forecastDayList.length - 1; i++) {
            const item = data.forecastDayList[i];
            if (data.forecastaqi[item.Fpredict_date]) {
                let desc = data.forecastaqi[item.Fpredict_date].desc;
                const aqiLevel = s['level_' + data.forecastaqi[item.Fpredict_date].level];
                if (desc.length > 2) { // example: 轻度污染 => 轻度
                    desc = desc.substring(0, 2);
                }
                forecast.push(
                    <li className={s.item} key={i}>
                        <span className={s.week}>{data.forecastaqi[item.Fpredict_date].week}</span>
                        <span className={s.date}>{data.forecastaqi[item.Fpredict_date].day}</span>
                        <span className={s.temp}>{item.Ftemp_high}</span>
                        <i className={s.icon}><img src={`https://h5tq.moji.com/mtianqi/assets/images/wea/w${item.Ficon_day}.png`} alt={item.Ficon_day} /></i>
                        <span className={s.wea}>{item.Fcondition_day}</span>
                        <span className={s.wind}>{item.Fwind_dir_day}</span>
                        <b className={aqiLevel}>{desc}</b>
                    </li>
                );
            } else {
                forecast.push(
                    <li className={s.item} key={i}>
                        <span className={s.week}>无</span>
                        <span className={s.date}>无</span>
                        <span className={s.temp}>无</span>
                        <i className={s.icon}>无</i>
                        <span className={s.wea}>无</span>
                        <span className={s.wind}>无</span>
                        <b className={s.level}>无</b>
                    </li>
                );
            }
        }
        let cName = s.hide;
        if (this.state.display) {
            cName = s.show;
        } else {
            cName = s.hide;
        }
        return (
            <div className={s.head}>
                <logo className={s.logo} />
                <div className={s.weather} onClick={() => this.handleShowOrHide()}>
                    <b>{data.city.name} {data.city.pname}</b>
                    <span>{data.condition.Ftemp}</span>
                    <i><img src={`https://h5tq.moji.com/mtianqi/assets/images/wea/w${data.condition.Ficon}.png`} alt={data.condition.Ficon} /></i>
                </div>
                <div className={cName}>
                    <div className={s.title}>
                        <div className={s.alert}>
                            {alert}
                            <b>{data.time.monthG}</b>
                            <span>农历 {data.time.monthN}</span>
                        </div>
                        <a href="http://m.moji.com/" className={s.more}>更多</a>
                    </div>
                    <div className={s.items}>
                        <ul>
                            {forecast}
                        </ul>
                    </div>
                    <div className={s.bg} onClick={() => this.handleShowOrHide()} />
                </div>
            </div>
        );
    }
}

export default Header;

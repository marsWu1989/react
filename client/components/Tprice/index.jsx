import React, { Component } from 'react';
import { Link } from 'react-router';

import s from './Tprice';

class Tprice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curIndex: 0,
            tabs: [
                {
                    tabName: 'Lite版',
                    id: 1
                }, {
                    tabName: 'Basic版',
                    id: 2
                }, {
                    tabName: 'Pro版',
                    id: 3
                }, {
                    tabName: 'Final版',
                    id: 4
                }
            ],
            content: [
                [<div key="1">
                    <div className={s.tabTitle}>天气预报lite版</div>
                    <div className={s.tabDesc}>国内全部城市（4000个）及国外主要城市（约20W）</div>
                    <div className={s.price}>￥<b>0.88</b>/万次</div>
                    <div className={s.tabDesc}>20元/月 原价26元</div>
                    <Link to="11" className={s.btu}>定制</Link>
                    <line className={s.line} />
                    <div className={s.tabTitle}>数据</div>
                    <div className={s.text}>实时天气数据：温度、风向、风速、AQI</div>
                    <div className={s.text}>逐小时预报类：温度、湿度、风向、风速、云量（未来3天逐小时）</div>
                    <div className={s.grey}>独家预报类：分钟级降水预报(X)</div>
                    <div className={s.through}>空气质量</div>
                    <div className={s.through}>气象灾害预警</div>
                    <div className={s.through}>生活指数及尾号限行</div>
                    <line className={s.line} />
                    <div className={s.tabTitle}>服务</div>
                    <div className={s.text}>访问量限额：1万次/天</div>
                    <div className={s.text}>查询方式：cityid、经纬度</div>
                    <div className={s.text}>服务器与网络带宽：共享</div>
                    <div className={s.text}>技术支持网络：Email、QQ</div>
                    <div className={s.text}>历史数据、更多数据（需要独立对接）</div>
                </div>],
                [<div key="2">
                    <div className={s.tabTitle}>天气预报Basic版</div>
                    <div className={s.tabDesc}>国内全部城市（4000个）及国外主要城市（约20W）</div>
                    <div className={s.price}>￥<b>3.88</b>/万次</div>
                    <div className={s.tabDesc}>388元/月 原价582元</div>
                    <Link to="11" className={s.btu}>定制</Link>
                    <line className={s.line} />
                    <div className={s.tabTitle}>数据</div>
                    <div className={s.text}>实时天气数据：温度、风向、风速、AQI</div>
                    <div className={s.text}>逐小时预报类：温度、湿度、风向、风速、云量（未来3天逐小时）</div>
                    <div className={s.through}>独家预报类：分钟级降水预报(X)</div>
                    <div className={s.through}>空气质量</div>
                    <div className={s.through}>气象灾害预警</div>
                    <div className={s.text}>仅提供尾号限行</div>
                    <line className={s.line} />
                    <div className={s.tabTitle}>服务</div>
                    <div className={s.text}>访问量限额：1万次/天</div>
                    <div className={s.text}>查询方式：cityid、经纬度</div>
                    <div className={s.text}>服务器与网络带宽：共享</div>
                    <div className={s.text}>技术支持网络：Email、QQ</div>
                    <div className={s.text}>历史数据、更多数据（需要独立对接）</div>
                </div>],
                [<div key="3">
                    <div className={s.tabTitle}>天气预报Pro版</div>
                    <div className={s.tabDesc}>国内全部城市（4000个）及国外主要城市（约20W）</div>
                    <div className={s.price}>￥<b>5.88</b>/万次</div>
                    <div className={s.tabDesc}>3388元/月 原价3528元</div>
                    <Link to="11" className={s.btu}>定制</Link>
                    <line className={s.line} />
                    <div className={s.tabTitle}>数据</div>
                    <div className={s.text}>实时天气数据：温度、风向、风速、AQI</div>
                    <div className={s.text}>逐小时预报类：温度、湿度、风向、风速、云量（未来五天逐小时，未来十五天逐日）</div>
                    <div className={s.through}>独家预报类：分钟级降水预报(X)</div>
                    <div className={s.text}>空气质量：未来五天逐日AQI</div>
                    <div className={s.text}>气象灾害预警</div>
                    <div className={s.text}>仅提供尾号限行</div>
                    <line className={s.line} />
                    <div className={s.tabTitle}>服务</div>
                    <div className={s.text}>访问量限额：1万次/天</div>
                    <div className={s.text}>查询方式：cityid、经纬度</div>
                    <div className={s.text}>服务器与网络带宽：共享</div>
                    <div className={s.text}>技术支持网络：Email、QQ</div>
                    <div className={s.text}>历史数据、更多数据（需要独立对接）</div>
                </div>],
                [<div key="4">
                    <div className={s.tabTitle}>天气预报Final版</div>
                    <div className={s.tabDesc}>国内全部城市（4000个）及国外主要城市（约20W）</div>
                    <div className={s.price}>￥<b>8.88</b>/万次</div>
                    <div className={s.tabDesc}>10888元/月 原价13320元</div>
                    <Link to="11" className={s.btu}>定制</Link>
                    <line className={s.line} />
                    <div className={s.tabTitle}>数据</div>
                    <div className={s.text}>实时天气数据：温度、风向、风速、AQI</div>
                    <div className={s.text}>逐小时预报类：温度、湿度、风向、风速、云量（未来3天逐小时）</div>
                    <div className={s.text}>独家预报类：分钟级降水预报</div>
                    <div className={s.text}>空气质量：未来五天逐日AQI</div>
                    <div className={s.text}>气象灾害预警</div>
                    <div className={s.text}>生活指数及尾号限行</div>
                    <line className={s.line} />
                    <div className={s.tabTitle}>服务</div>
                    <div className={s.text}>访问量限额：1万次/天</div>
                    <div className={s.text}>查询方式：cityid、经纬度</div>
                    <div className={s.text}>服务器与网络带宽：共享</div>
                    <div className={s.text}>技术支持网络：Email、QQ</div>
                    <div className={s.text}>历史数据、更多数据（需要独立对接）</div>
                </div>]
            ]
        };
    }
    handleClickTab(index) {
        this.setState({
            curIndex: index
        });
    }
    handleCheckTab(index) {
        return index === this.state.curIndex ? s.tabCur : s.tab;
    }
    handleCheckContent(index) {
        return index === this.state.curIndex ? s.show : s.hide;
    }
    render() {
        return (
            <div className={s.Tprice}>
                <div className={s.title}>天气API服务价格</div>
                <div className={s.tabHead}>
                    <ul>
                        {
                            this.state.tabs.map((item, index) => (
                                <li
                                    className={this.handleCheckTab(index)}
                                    onClick={() => { this.handleClickTab(index); }}
                                    key={index}
                                >{item.tabName}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={s.tabContent}>
                    <ul>
                        {
                            this.state.content.map((item, index) => (
                                <li
                                    className={this.handleCheckContent(index)}
                                    key={index}
                                >{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tprice;

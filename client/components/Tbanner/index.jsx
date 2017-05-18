import React, { Component } from 'react';
import { connect } from 'react-redux';

import s from './Tbanner';

class Tbanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
            arr: [ // init spot
                <li className={s.spotCur} key="1" />,
                <li className={s.spot} key="2" />,
                <li className={s.spot} key="3" />,
                <li className={s.spot} key="4" />
            ],
            apiNum: null,
            startX: null,
            endX: null
        };
    }
    onTouchStart() {
        const startX = event.changedTouches[0].pageX;
        this.setState({
            startX: startX
        });
    }
    onTouchEnd() {
        const endX = event.changedTouches[0].pageX;
        this.setState({
            endX: endX
        });
        this.handleTab();
    }
    handleTab() {
        const temp = [];
        let num = this.state.num;
        const bannerItem = this.refs.bannerItem;
        const Bwidth = this.refs.Tbanner.offsetWidth;
        const startX = this.state.startX;
        const endX = this.state.endX;
        if (num !== 1 && startX < endX && this.props.isTouch) {
            num--;
        } else if (num !== 4 && startX > endX && this.props.isTouch) {
            num++;
        }
        for (let i = 0; i <= 3; i++) {
            if (i === num - 1) {
                temp.push(<li className={s.spotCur} key={i} />);
            } else {
                temp.push(<li className={s.spot} key={i} />);
            }
        }
        bannerItem.style.left = `${-(num - 1) * Bwidth}px`;
        this.setState({
            num: num,
            arr: temp
        });
    }
    formatNum() {
        let d = this.props.data.data.data;
        d = d ? d[0].num : null;
        const arr = [];
        if (d) {
            let x = d + '';
            const rgx = /(\d+)(\d{3})/;
            while (rgx.test(x)) {
                x = x.replace(rgx, '$1' +
                    ',' +
                    '$2'
                );
            }
            const n = x.split(',');
            for (let i = 0; i < n.length; i++) {
                arr.push(<li className={s.number} key={i}>{n[i]}</li>);
            }
        }
        return arr;
    }
    render() {
        return (
            <div className={s.Tbanner} ref="Tbanner">
                <div
                    className={s.bannerItem}
                    ref="bannerItem"
                    onTouchStart={() => this.onTouchStart()}
                    onTouchEnd={() => this.onTouchEnd()}
                >
                    <div className={s.server}>
                        <div className={s.title}>墨迹天气MWS</div>
                        <div className={s.desc}>MOJi Weather Server<br />提供更全面、更准确、更稳定的气象数据</div>
                        <div className={s.line} />
                        <div className={s.desc}>已准确稳定服务</div>
                        <div className={s.num}>
                            <ul>
                                {this.formatNum()}
                            </ul>
                            次
                        </div>
                    </div>
                    <div className={s.overall}>
                        <div className={s.title}>数据内容全面</div>
                        <div className={s.desc}>
                            提供包括国内4000多个城市及景点<br />
                            以及全球20万个城市的实况、<br />
                            预报、AQI、生活指数、预警等天气数据
                        </div>
                    </div>
                    <div className={s.accurate}>
                        <div className={s.title}>数据专业 精准</div>
                        <div className={s.desc}>
                            国内外多家权威数据源融合<br />
                            墨迹天气UGC数据、时景数据等作为补充
                        </div>
                    </div>
                    <div className={s.stable}>
                        <div className={s.title}>系统稳定性高</div>
                        <div className={s.desc}>
                            完美支持高并发，更合理的负载均衡<br />
                            系统服务可用性达到99.9%以上
                        </div>
                    </div>
                </div>
                <div className={s.spotBox}>
                    <ul>
                        {this.state.arr}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect()(Tbanner);

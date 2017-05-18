import React, { Component } from 'react';

import s from './ToTop';

class ToTop extends Component {
    constructor(props) {
        super(props);
        this.state = { // init toTop showOrHide & top
            display: false,
            top: null
        };
        this._handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() { // bind scroll event
        window.addEventListener('scroll', this._handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleScroll);
    }
    handleScroll() { // scroll event
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 0) {
            this.setState({
                display: true,
                top: top
            });
        } else {
            this.setState({
                display: false,
                top: top
            });
        }
    }
    handleToScrollTop() { // to top
        let top = this.state.top;
        const time = setInterval(() => {
            top -= 50; // speed: 50
            document.body.scrollTop = top;
            document.documentElement.scrollTop = top;
            if (top <= 0) {
                clearInterval(time);
            }
        }, 10);
        this.setState({
            display: false
        });
    }
    render() {
        let cName = s.hide;
        if (this.state.display) {
            cName = s.show;
        } else {
            cName = s.hide;
        }
        return (
            <toTop
                className={cName}
                onClick={() => this.handleToScrollTop()}
            />
        );
    }
}
export default ToTop;

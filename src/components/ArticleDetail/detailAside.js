import React, {Component, Children} from 'react';
import {Grid, Row, Col, Collapse, Accordion, Panel} from 'react-bootstrap';
import style  from 'styles/blogDetail.less';

class DetailAside extends Component {
    /**
     * Creates an instance of DetailAside.
     * 
     * @param {any} props
     * @param {any} context
     */
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentIndex: 0,
            fixed: false
        };
        this.handleScroll=this.handleScroll.bind(this);
    }

    setDomIndex(index) {
        this.setState({ currentIndex: index });
    }

    checkLiIndex(index) {
        return (this.state.currentIndex === index) ? style["active"] : style["unactive"];
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextState.currentIndex !== this.state.currentIndex) ||
            (this.state.fixed !== nextState.fixed);
    }

    handleScroll() {
        // let dom = this.refs.detailAside;
        // let clientRect = dom.getBoundingClientRect();
        // console.info("aside滚动", clientRect.top);
        // console.info("scrollTop", dom.scrollTop);
        // console.info("offsetTop", dom.offsetTop);
        let bodyScrollTop = window.pageYOffset
                            || document.documentElement.scrollTop
                            || document.body.scrollTop
                            || 0; 
        if (bodyScrollTop > 40) {
            this.setState({
                fixed: true
            })
        } else {
            this.setState({
                fixed: false
            })
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
          window.removeEventListener("scroll", this.handleScroll);
    }

    updateCurrentStyle() {
        let sty = this.state.fixed ? "detail-nav-fixed" : "detail-nav";
        return style[sty];
    }

    render() {
        return (
            <div>
                <aside className={this.updateCurrentStyle() }>
                    <ul>
                        <li className={this.checkLiIndex.call(this, 0) } onClick={(e) => { this.setDomIndex(0) } }>
                            <a href="#0">
                                什么是DOM？
                            </a>
                            <ul className={style["level1-ul"]}>
                                <li><a href="#1">Element，元素</a></li>
                                <li><a href="#2">Attribute，属性</a></li>
                            </ul>
                        </li>
                        <li  className={this.checkLiIndex.call(this, 1) } onClick={(e) => { this.setDomIndex(1) } }>
                            <a href="#3">
                                DOM 创建
                            </a>
                            <ul className={style["level1-ul"]}>
                                <li><a href="#3">两种Query方法</a></li>
                                <li><a href="#4">API返回的的</a></li>
                            </ul>
                        </li>
                        <li className={this.checkLiIndex.call(this, 2) } onClick={(e) => { this.setDomIndex(2) } }>
                            <a href="#5">
                                DOM 查询
                            </a>
                            <ul className={style["level1-ul"]}>
                                <li><a href="#6">innerHTML与outerHTML的区别？</a></li>
                                <li><a href="#7">jQuery的html() 与innerHTML的区别？</a></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        );
    }
}

export default DetailAside;
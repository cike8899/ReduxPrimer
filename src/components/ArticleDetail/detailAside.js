import React, {Component, Children} from 'react';
import {Grid, Row, Col, Collapse, Accordion, Panel} from 'react-bootstrap';
import style  from 'styles/blogDetail.less';

class DetailAside extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentIndex: 0
        };
    }

    setDomIndex(index) {
        this.setState({ currentIndex: index });
    }

    checkLiIndex(index) {
        return (this.state.currentIndex === index) ? style["active"] : style["unactive"];
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.currentIndex !== this.state.currentIndex;
    }

    render() {
        return (
            <div>
                <aside className={style["detail-nav"]}>
                    <ul>
                        <li className={this.checkLiIndex.call(this, 0) } onClick={(e) => { this.setDomIndex(0) } }>
                            <a>
                                什么是DOM？
                            </a>
                            <ul className={style["level1-ul"]}>
                                <li><a>Element，元素</a></li>
                                <li><a>Attribute，属性</a></li>
                            </ul>
                        </li>
                        <li  className={this.checkLiIndex.call(this, 1) } onClick={(e) => { this.setDomIndex(1) } }>
                            <a>
                                DOM 创建
                            </a>
                            <ul className={style["level1-ul"]}>
                                <li><a>两种Query方法</a></li>
                                <li><a>API返回的的</a></li>
                            </ul>
                        </li>
                        <li className={this.checkLiIndex.call(this, 2) } onClick={(e) => { this.setDomIndex(2) } }>
                            <a>
                                DOM 查询
                            </a>
                            <ul className={style["level1-ul"]}>
                                <li><a>innerHTML与outerHTML的区别？</a></li>
                                <li><a>jQuery的html() 与innerHTML的区别？</a></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        );
    }
}

export default DetailAside;
import React, { Component } from 'react';
import classnames from 'classnames';
import { Grid, Row, Col, Collapse, Accordion, Panel } from 'react-bootstrap';
import Masonry, { MasonryOptions, MasonryPropTypes } from 'react-masonry-component';
import style from '../../styles/blogMainContent.less';
import img1 from 'imgs/img01.jpg';
import img2 from 'imgs/img02.jpg';
import img3 from 'imgs/img03.jpg';
import img4 from 'imgs/img04.jpg';
import domEvent from '../../utils/domEvent';

import ArticleSummary from './articalSummary';

let masonryOptions = {
    transitionDuration: 0
};

class CenterContent extends Component {
    constructor(props) {
        super(props);
        let contents = [
            "在这个系列文章的第一部分和第二部分，我们来看一下这些卓越的工具们。在这篇文章中，我们详细说明如何编写，编译，打包代码；而在第二篇文章会集中在linting，formatting 和 testing（利用 JSCS，ESLint，mocha，Chai，Karma 和 Istanbul）。让我们来看看在这篇文章中涉及到的",
            "adipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            "sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            "At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        ];
        this.arr = [
            { artImg: img1, artTitle: "nodejs 入门实践", artContent: contents[0] },
            { artImg: img2, artTitle: "JavaScript 事件机制", artContent: contents[1] },
            { artImg: img3, artTitle: "react 最佳实践", artContent: contents[2] },
            { artImg: img4, artTitle: "css3 不为人知的秘密", artContent: contents[3] }
        ];
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e) {
        let htmlEle = document.querySelector("html");
        let bodyEle = document.querySelector("body");
        let clientH = htmlEle.clientHeight;
        let scrollH = htmlEle.scrollHeight;
        let scrollTop = bodyEle.scrollTop;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            let currentCount = this.props.notes.rows.length;
            let total = this.props.notes.pageObj.total;
            if ((scrollH - scrollTop < clientH + 30) && (currentCount < total)) {
                let nextPage = this.props.notes.pageObj.currentPage + 1;//这边应该后台数据返回成功后再进行下次查询
                this.props.actions.getNotesExcerptByPage({ countPerPage: 5, currentPage: nextPage });
            }
        }, 1000);
    }

    componentWillUpdate(nextProps, nextState) {
        console.info(nextProps, nextState);
    }

    componentWillMount() {
        // this.props.actions.getAllNotes();
        this.props.actions.getNotesExcerptByPage({ countPerPage: 5, currentPage: 1 });
    }

    componentDidMount() {
        domEvent(window).on("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        domEvent(window).off("scroll", this.handleScroll);
    }

    render() {
        let classes = classnames({
            [style['center-content-wrap']]: true
        });

        let colClasses = classnames({
            [style['col-border']]: true
        });
        let domArr = this.props.notes.rows.map((note, idx) => {
            return (
                <Col xs={12} sm={6} md={6} className={colClasses} key={idx}>
                    <ArticleSummary artImg={this.arr[0].artImg} note={note} actions={this.props.actions} />
                </Col>
            );
        });
        console.info(this.arr);
        return (
            <div className={classes}>
                <Masonry options={masonryOptions} elementType={'div'}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                    >
                    {domArr}
                </Masonry>
            </div>
        );
    }
}

export default CenterContent;
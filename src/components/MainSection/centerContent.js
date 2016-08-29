import React, {Component} from 'react';
import classnames from 'classnames';
import {Grid, Row, Col, Collapse, Accordion, Panel} from 'react-bootstrap';
import Masonry, {MasonryOptions, MasonryPropTypes}  from 'react-masonry-component';
import style from '../../styles/blogMainContent.less';
import img1 from 'imgs/img01.jpg';
import img2 from 'imgs/img02.jpg';
import img3 from 'imgs/img03.jpg';
import img4 from 'imgs/img04.jpg';

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
    }

    render() {
        let classes = classnames({
            [style['center-content-wrap']]: true
        });

        let colClasses = classnames({
            [style['col-border']]: true
        });
        let domArr = this.arr.map((obj,idx) => {
            return (
                <Col xs={12} sm={6} md={6} className={colClasses} key={idx}>
                    <ArticleSummary artImg={obj.artImg} artTitle={obj.artTitle}
                        artContent={obj.artContent}/>
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
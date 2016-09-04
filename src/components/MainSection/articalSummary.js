/*global _*/

import React, {Component, PropTypes} from 'react';
import style from 'styles/blogMainContent.less';
import classnames from 'classnames';
import {Grid, Row, Col, Collapse, Accordion, Panel, Button} from 'react-bootstrap';
import {Link, browserHistory } from 'react-router';
import FontAwesome  from 'react-fontawesome';
import Img1 from 'imgs/img01.jpg';

class ArticleSummary extends Component {
    handleSubmit() {
        browserHistory.push('/blogDetail');
    }

    render() {
        const classes = classnames({
            [style['article-summary-wrap']]: true
        });
        const {artImg, artTitle, artContent} = this.props;

        return (
            <article className={classes}>
                <img src={artImg} className='full'/>
                <div className={`${style['wrap-art']}`}>
                    <div className="art-header">
                        <h3 className={style["article-title"]}>
                            <a>
                                {artTitle}
                            </a>
                        </h3>
                    </div>
                    <div className={style["art-content"]}>
                        <p>
                            {artContent}
                        </p>
                        <div className={style['art-content-button-pane']}>
                            <Button bsStyle="primary" onClick={this.handleSubmit}>
                                Read More
                            </Button>
                        </div>
                    </div>
                    <div className={style["art-footer"]}>
                        <FontAwesome name='bookmark' className={style["article-mark-icon"]} />
                        <span className={style["article-mark"]}>
                            <a>
                                [react]
                            </a>
                        </span>
                        <span className={style["article-mark"]}>
                            <a>
                                [javasctipt]
                            </a>
                        </span>
                    </div>
                </div>
            </article >
        );
    }
}

ArticleSummary.propTypes = {
    'artImg': PropTypes.string,
    'artTitle': PropTypes.string,
    'artContent': PropTypes.string,
}


export default ArticleSummary;
/*global _*/

import React, { Component, PropTypes } from 'react';
import style from 'styles/blogMainContent.less';
import classnames from 'classnames';
import { Grid, Row, Col, Collapse, Accordion, Panel, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Img1 from 'imgs/img01.jpg';
import TagMark from './tagMark';

class ArticleSummary extends Component {
    handleSubmit(e) {
        // this.props.actions.getNoteById(this.props.note.id);
        let id = this.props.note.id;
        browserHistory.push(`/blogDetail/${id}`);
    }

    render() {
        const classes = classnames({
            [style['article-summary-wrap']]: true
        });
        const {artImg, actions, note} = this.props;

        return (
            <article className={classes}>
                <img src={artImg} className='full' />
                <div className={`${style['wrap-art']}`}>
                    <div className="art-header">
                        <h3 className={style["article-title"]}>
                            <a>
                                {note.title}
                            </a>
                        </h3>
                    </div>
                    <div className={style["art-content"]}>
                        <p>
                            {note.excerpt}
                        </p>
                        <div className={style['art-content-button-pane']}>
                            <Button bsStyle="primary" onClick={(e) => this.handleSubmit(e)}>
                                Read More
                            </Button>
                        </div>
                    </div>
                    <div className={style["art-footer"]}>
                        <FontAwesome name='bookmark' className={style["article-mark-icon"]} />
                        {
                            note.tags.map((tag) => {
                                return (<TagMark />)
                            })
                        }
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
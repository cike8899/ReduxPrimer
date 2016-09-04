import React, {Component} from 'react';
import {Grid, Row, Col, Collapse, Accordion, Panel} from 'react-bootstrap';
import style  from 'styles/blogDetail.less';
import DetailAside from './detailAside';

class ArticleDetail extends Component {
    render() {
        console.info("kkk");
        return (
            <div className={style["detail-content"]}>
                <div className={style["detail-header"]}>
                    <h3>原生JavaScript的DOM操作汇总</h3>
                </div>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12} md={3} xsHidden>
                            <DetailAside/>
                        </Col>
                        <Col xs={12} md={9}>
                            <article className={style["detail-article"]}>
                                <p>
                                </p>
                            </article>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ArticleDetail;
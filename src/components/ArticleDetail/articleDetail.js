import React, {Component} from 'react';
import {Grid, Row, Col, Collapse, Accordion, Panel} from 'react-bootstrap';
import style  from 'styles/blogDetail.less';
import DetailAside from './detailAside';
import DetailHeader from './detailHeader';
import ArticleSpinner from './articleSpinner';

class ArticleDetail extends Component {
    render() {
        console.info("kkk");
        return (
            <div className={style["detail-content"]}>
                <DetailHeader/>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12} md={3} xsHidden>
                            <DetailAside/>
                        </Col>
                        <Col xs={12} md={9}>
                            <article className={style["detail-article"]}>
                                <p>
                                    React 和 D3 构建的图表库 Recharts 编辑/纠错
                                    分享到：
                                    已用    +2 收藏	+100
                                    Recharts 是一个用 React 和 D3构建的重新定义的图表库。这个库能帮助你在 React 应用中轻易绘制图表，Recharts 的主要特点：

                                    简单地使用 React 组件进行部署
                                    支持原生 SVG，轻量级应用一些 D3 子模块
                                </p>
                                <ArticleSpinner/>
                            </article>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ArticleDetail;
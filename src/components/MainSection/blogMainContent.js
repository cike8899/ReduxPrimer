import React, { Component } from 'react';
import classnames from 'classnames';
import { Grid, Row, Col, Collapse, Accordion, Panel } from 'react-bootstrap';
import style from '../../styles/blogMainContent.less';
import AsideNavBar from './asideNavBar';
import CenterContent from './centerContent';

class BlogMainContent extends Component {
    render() {
        const mainClasses = classnames({
            [style['blog-main-content-wrap']]: true
        });

        let gridInstance = (
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={12} md={9}>
                        <CenterContent actions={this.props.actions} notes={this.props.notes} />
                    </Col>
                    <Col xs={12} md={3} xsHidden className={style['aside-col']}>
                        <AsideNavBar />
                    </Col>
                </Row>
            </Grid>
        );
        return (
            <div className={mainClasses}>
                {gridInstance}
            </div>
        );
    }
}

export default BlogMainContent;
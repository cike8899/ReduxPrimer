import React, { Component } from 'react';
import { Grid, Row, Col, Collapse, Accordion, Panel } from 'react-bootstrap';
import marked from 'marked';
import style from 'styles/blogDetail.less';
import DetailAside from './detailAside';
import DetailHeader from './detailHeader';
import ArticleSpinner from './articleSpinner';

class ArticleDetail extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentWillMount() {
        let id = this.props.params.id;
        this.props.actions.getNoteById(id);
    }

    render() {
        let note = this.props.note;
        let isNoteExist = (note && Object.keys(note).length > 0) ? true : false;
        return (
            <div className={style["detail-content"]}>
                <DetailHeader />
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12} md={3} xsHidden>
                            <DetailAside />
                        </Col>
                        <Col xs={12} md={9}>
                            <article className={style["detail-article"]}>
                                <ArticleSpinner note={note} />
                            </article>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ArticleDetail;
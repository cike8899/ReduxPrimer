import React, { Component } from 'react';
import Editor from 'react-md-editor';
import style from 'styles/blogDetail.less';
import Waypoint from 'react-waypoint';
// import marked from 'marked';
import marked from '../../utils/markedHighLight';

class ArticleSpinner extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { code: "# Markdown" };
        // this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
        // this.handleWaypointLeave = this.handleWaypointLeave.bind(this);
    }

    handleWaypointEnter(msg) {
        console.info(msg);
    }

    handleWaypointLeave(msg) {
        console.info(msg);
    }

    render() {
        let note = this.props.note;
        let isNoteExist = (note && Object.keys(note).length > 0) ? true : false;
        let rawMarkup = "";
        if (isNoteExist) {
            rawMarkup = marked(note.content.toString());
        }
        return (
            <div className={style['article-spinner']}>
                <Waypoint onEnter={() => { this.handleWaypointEnter("enter") } }
                    onLeave={() => { this.handleWaypointLeave("leave") } } />
                <span dangerouslySetInnerHTML={{ __html: rawMarkup }}></span>
            </div>
        );
    }
}

export default ArticleSpinner;
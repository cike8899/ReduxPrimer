import React, {Component} from 'react';
import classnames from 'classnames';
import style from '../../styles/blogFooter.less';

class BlogFooter extends Component {
    render() {
        const classes = classnames({
            [style['blog-footer-wrap']]: true,
            'navbar-fixed-bottom': false
        });
        const innerClasses = classnames({
            [style['blog-footer-inner']]: true
        });

        return (
            <div className={classes}>
                <div className={innerClasses}>Power by BillChen © 2016</div>
            </div>
        );
    }
}

export default BlogFooter;
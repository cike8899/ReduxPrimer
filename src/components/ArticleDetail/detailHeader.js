import React, {Component} from 'react';
import style  from 'styles/blogDetail.less';

class DetailHeader extends Component {
    render() {
        return (
            <div className={style["detail-header"]}>
                <h4>原生JavaScript的DOM操作汇总</h4>
            </div>
        );
    }
}

export default DetailHeader;
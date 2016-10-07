import React, {Component} from 'react';
import style from './style.less';

class TabsControl extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentIndex: 0
        };
    }

    getTitleItemCssClasses(index) {
        return index === this.state.currentIndex
            ? `${style["tab-title-item"]} ${style["active"]}`
            : style["tab-title-item"];
    }

    //style["tab-content-item active"] 直接这么写 className显示不了
    getContentItemCssClasses(index) {
        return index === this.state.currentIndex
            ? `${style["tab-content-item"]} ${style["active"]}`
            : style["tab-content-item"];
    }

    render() {
        let that = this;
        let {baseWidth} = this.props;
        let childrenLength = this.props.children.length;

        return (
            <div>
                <nav className={style["tab-title-items"]}>
                    {React
                        .Children
                        .map(this.props.children, (ele, idx) => {
                            return (
                                <div
                                    className={that.getTitleItemCssClasses(idx)}
                                    onClick={() => {
                                    this.setState({currentIndex: idx})
                                }}>
                                    {ele.props.name}
                                </div>
                            );
                        })}
                </nav>
                <div className={style["tab-content-items"]}>
                    {React
                        .Children
                        .map(this.props.children, (ele, idx) => {
                            return (
                                <div className={this.getContentItemCssClasses(idx)}>
                                    {ele}
                                </div>
                            )
                        })}
                </div>
            </div>
        );
    }
}

export default TabsControl;
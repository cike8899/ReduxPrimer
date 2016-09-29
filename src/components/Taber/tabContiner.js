import React, {Component} from 'react';
import TabControl from './tabsControl';
import Tab from './tab';
import style from './style.less';

class TabContainer extends Component {
    render() {
        return (
            <div className={style["tab-container"]}>
                <TabControl baseWidth={400}>
                    <Tab name="red">
                        <div className={style["red"]}>
                            我是红色的标签页
                        </div>
                    </Tab>
                    <Tab name="blue">
                        <div className={style["blue"]}>
                            我是蓝色的标签页
                        </div>
                    </Tab>
                    <Tab name="yellow">
                        <div className={style["yellow"]}>
                            我是黄色的标签页
                        </div>
                    </Tab>
                </TabControl>
            </div>
        );
    }
}

export default TabContainer;
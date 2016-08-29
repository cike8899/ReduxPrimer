import React, {Component} from 'react';
import classnames from 'classnames';
import {Grid, Row, Col, Collapse, Accordion, Panel} from 'react-bootstrap';
import style from '../../styles/blogMainContent.less';

class AsideNavBar extends Component {
    render() {
        let currentDom=(
             <aside>
                <Accordion>
                    <Panel header="javascript" eventKey="1">
                        Anim pariatur
                    </Panel>
                    <Panel header="css" eventKey="2">
                        Anim pariatur
                    </Panel>
                    <Panel header="reactjs" eventKey="3">
                        Anim pariatur
                    </Panel>
                </Accordion>
            </aside>
        );
        return (
            currentDom
        );
    }
}

export default AsideNavBar;
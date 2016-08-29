import React, {Component} from 'react';
import style from '../../styles/blogHeader.less';
import classnames from 'classnames';
// import bootstrapdropdownhover  from 'bootstrap-dropdown-hover';


import {PageHeader, ListGroup, ListGroupItem, Navbar, Nav, NavItem, NavDropdown, MenuItem } 
from 'react-bootstrap';

class BlogHeader extends Component {
    alertClicked() {
        console.info("alertClicked");
    }
    render() {
        const classes = classnames({
            'blog-header-wrap': true
        })

        return (
            <div>
            <Navbar inverse fixedTop={true}>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Bill's Blog</a>
                </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">首页</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={2} href="#">联系我</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default BlogHeader;
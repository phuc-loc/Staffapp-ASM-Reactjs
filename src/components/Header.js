import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    render() {
        return (
            <div className="container">
                <Navbar dark expand="md">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.navOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/nhanvien">Nhân viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/phongban">Phòng ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/bangluong">Bảng lương</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        );
    }
}

export default Header;
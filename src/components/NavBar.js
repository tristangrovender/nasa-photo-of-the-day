import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";

const NavBar = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="clear" light expand="md">
                <NavbarBrand href="https://apod.nasa.gov/apod/astropix.html">
                    APOD
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/tristangrovender">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Science rocks!</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;

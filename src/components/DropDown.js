import React, { useState } from "react";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

const MyButton = props => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="secondary" caret>
                Choose a date
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Available:</DropdownItem>
                <DropdownItem>3-29-20</DropdownItem>
                <DropdownItem>3-28-20</DropdownItem>
                <DropdownItem>3-27-20</DropdownItem>
                <DropdownItem>3-26-20</DropdownItem>
                <DropdownItem>3-25-20</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
};

export default MyButton;

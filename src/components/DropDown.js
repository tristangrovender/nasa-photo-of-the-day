import React from "react";

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "3-28-20" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("The date you selected is: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select a date:
                    <select
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <option value="3-28-20">3-28-20</option>
                        <option value="3-27-20">3-27-20</option>
                        <option value="3-26-20">3-26-20</option>
                        <option value="3-25-20">3-25-20</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default DropDown;

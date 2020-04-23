import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit("mathena828");
  }

  onChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h2>What is your username?</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Your full name"
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default UsernameForm;

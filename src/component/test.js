import React from 'react';

export default class MessageComponent extends React.Component {
  constructor() {
    super();
    this.state = { msg: "Welcome to PROG8730!" };
  }

  update = () => {
    this.setState({ msg: "Welcome to Advanced Full-Stack Programming!" });
  };

  render() {
    return (
      <div>
        <button onClick={this.update}>Update</button>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}
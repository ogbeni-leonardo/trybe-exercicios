import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage, match: { params } } = this.props;
    const { id } = params;

    return (
      <div>
        <h2>Users</h2>
        <p> {greetingsMessage}, My awesome Users component </p>
        { id && <p>And this is my id { id }</p> }
      </div>
    );
  }
}

export default Users;
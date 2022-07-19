import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { user: { username, password } } = this.props;
    const validUser = username === 'joao' && password === '1234';

    if (!validUser) {
      alert('Access denied');
      return <Redirect to="/" />
    }

    return(
      <p>Welcome { username }</p>
    )
  }
}

export default StrictAccess;
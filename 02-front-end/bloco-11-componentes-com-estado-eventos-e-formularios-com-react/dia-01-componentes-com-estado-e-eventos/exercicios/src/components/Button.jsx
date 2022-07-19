import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { children, func, disabled } = this.props;

    return (
      <button
        disabled={ disabled }
        onClick={ func }
        type="button"
      >
        { children }
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

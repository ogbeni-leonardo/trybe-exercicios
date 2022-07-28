import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { content, remTodo } = props;
  const [removeButtonIsDisabled, setRemoveButtonIsDisabled] = useState(true);
  return (
    <div className="Item">
      {content}
      <button
        type="button"
        onClick={ () => setRemoveButtonIsDisabled((s) => !s) }
      >
        Selecionar
      </button>
      <button
        type="button"
        disabled={ removeButtonIsDisabled }
        onClick={ () => remTodo(content) }
      >
        Remover
      </button>
    </div>
  );
}

Item.defaultProps = {
  remTodo: () => {},
};

Item.propTypes = {
  content: PropTypes.string.isRequired,
  remTodo: PropTypes.func,
};

export default Item;

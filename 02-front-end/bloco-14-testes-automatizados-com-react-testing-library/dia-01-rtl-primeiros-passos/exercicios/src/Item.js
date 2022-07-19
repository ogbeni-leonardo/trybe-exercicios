import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { content, remTodo } = props;

  const [buttonRemoveDisabled, setButtonRemoveDisabled] = useState(true);

  return (
    <div className="Item">
      {content}
      <div>
        <button
          type="button"
          onClick={ () => setButtonRemoveDisabled(!buttonRemoveDisabled) }
        >
          Selecionar
        </button>
        <button
          type="button"
          disabled={ buttonRemoveDisabled }
          onClick={ () => remTodo(content) }
        >
          Remover
        </button>
      </div>
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
  remTodo: PropTypes.func.isRequired,
};

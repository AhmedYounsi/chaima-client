import React from 'react';
import './button.scss';
function Button(props) {
  return (
    <button
      onClick={() => props.onClick()}
      className={'button button-1 ' + props.class}
      style={{ width: props.width }}
    >
      {props.title}
    </button>
  );
}

export default Button;

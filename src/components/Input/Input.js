import React from 'react';
import './Input.scss';


function Input(props) {
  return (
    <div className="input-content" style={{ width: props.width }}>
      {props.icon}
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className={'custom-input ' + props.className}
        placeholder={props.placeholder}
        style={{ width: '100%', textAlign: props.center ? 'center' : '' }}


      />
    </div>
  );
}

export default Input;

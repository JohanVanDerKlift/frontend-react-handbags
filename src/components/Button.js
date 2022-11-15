import React from 'react';

function Button({innerText, disabled}) {
  return (
    <button type="button" onClick={() => console.log(innerText)} disabled={disabled}>{innerText}</button>
  );
}

export default Button;
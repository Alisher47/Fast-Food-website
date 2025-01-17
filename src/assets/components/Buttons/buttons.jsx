import React from 'react';

const Button = ({ text, onClick, className, disabled, type, }) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick} 
      className={`px-4 py-2 rounded ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
      disabled={disabled} 
    >
      {text} 
    </button>
  );
};

export default Button;

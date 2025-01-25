import React from 'react';

const Button = ({ onClick, type = 'button', children, className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`px-4 py-2  text-white rounded  ${className}`}>
      {children}
    </button>
  );
};

export default Button;

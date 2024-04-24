import React from 'react';
import { ButtonProps } from '../../../interfaces';

const Button: React.FC<ButtonProps> = ({ children, variant, size, onClick, type ='button'}) => {
  const buttonStyle: React.CSSProperties = {
    color: variant, 
    fontSize: size || 'inherit',
    cursor: 'pointer', 
    padding: '0.5rem 1rem',
    border: 'none', 
    backgroundColor: 'transparent', 
  };

  return (
    <button style={buttonStyle} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
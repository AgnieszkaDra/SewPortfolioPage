import React from 'react';
import { ButtonProps } from '../../../interfaces';
import styled from 'styled-components';
import theme from '../../../styles/themes';

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.padding.small};
  font-size: ${(props) => props.size || theme.fontSize.medium};
  background-color: transparent;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out,
		box-shadow 0.3s ease-in-out;
  &:hover {
		background-color: ${({ theme }) => theme.colors.chocoDarken};	
    transform: scale(1.02);
	}
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, size, type = 'button' }) => {
  return (
    <StyledButton onClick={onClick} type={type} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;


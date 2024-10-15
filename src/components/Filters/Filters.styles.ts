import styled from 'styled-components';
import { Colors } from 'core/variables/constants';

interface ButtonProps {
  $variant: 'default' | 'hover' | 'active' | 'disabled';
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 103px;
  height: 48px;
  padding: 1rem;
  border-radius: 1rem;
  font-weight: 500;
  text-transform: none;
  box-sizing: border-box;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  //variants
  background-color: ${({ $variant }) =>
    $variant === 'disabled' ? Colors.tertiary_stroke : Colors.bg_white};

  color: ${({ $variant }) =>
    $variant === 'disabled' ? Colors.secondary : Colors.primary};

  border: ${({ $variant }) =>
    $variant === 'hover'
      ? `2px solid ${Colors.tertiary_stroke}`
      : '1px solid red'};

  border: ${({ $variant }) => {
    switch ($variant) {
      case 'hover':
        return `2px solid ${Colors.tertiary_stroke}`;
      case 'active':
        return `1px solid ${Colors.secondary}`;
      default:
        return `1px solid ${Colors.tertiary_stroke}`;
    }
  }};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

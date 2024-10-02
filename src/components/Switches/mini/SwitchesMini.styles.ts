import styled from 'styled-components';
import { Colors } from 'core/variables/constants';

interface ButtonProps {
  isActive: boolean;
}
export const ParentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 96px;
  height: 48px;
  border: 1px solid ${Colors.tertiary_stroke};
  border-radius: 1rem;
  padding: 2px;
`;

export const LeftButton = styled.button<ButtonProps>`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  padding: 0;
  background-color: ${({ isActive }) =>
    isActive ? Colors.bg_asside : Colors.bg_white};
  color: ${({ isActive }) => (isActive ? Colors.accent : Colors.primary)};
  font-weight: 500;
  box-sizing: border-box;
  cursor: pointer;
  border: none;

  svg {
    width: 18px;
    height: 18px;
    margin-top: 5px;
    path {
      stroke: ${({ isActive }) => (isActive ? Colors.accent : Colors.primary)};
    }
  }
`;

export const RightButton = styled.button<ButtonProps>`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  padding: 0;
  background-color: ${({ isActive }) =>
    isActive ? Colors.bg_asside : Colors.bg_white};
  color: ${({ isActive }) => (isActive ? Colors.accent : Colors.primary)};
  font-weight: 500;
  box-sizing: border-box;
  cursor: pointer;
  border: none;

  svg {
    width: 18px;
    height: 18px;
    margin-top: 5px;
    path {
      stroke: ${({ isActive }) => (isActive ? Colors.accent : Colors.primary)};
    }
  }
`;

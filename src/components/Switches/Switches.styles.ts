import styled from 'styled-components';
import { Colors } from 'core/variables/constants';

// Интерфейс для пропсов активной кнопки
interface ButtonProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const LeftButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: 1px solid
    ${({ isActive }) => (isActive ? Colors.bg_asside : Colors.tertiary_stroke)};
  width: 101px;
  height: 48px;
  border-radius: 1rem;
  padding: 14px;
  background-color: ${({ isActive }) =>
    isActive ? Colors.bg_asside : Colors.bg_white};
  color: ${({ isActive }) => (isActive ? Colors.accent : Colors.primary)};
  font-weight: 500;
  box-sizing: border-box;
  cursor: pointer;

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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: 1px solid
    ${({ isActive }) => (isActive ? Colors.bg_asside : Colors.tertiary_stroke)};
  width: 123px;
  height: 48px;
  border-radius: 1rem;
  padding: 14px;
  background-color: ${({ isActive }) =>
    isActive ? Colors.bg_asside : Colors.bg_white};
  color: ${({ isActive }) => (isActive ? Colors.accent : Colors.primary)};
  font-weight: 500;
  box-sizing: border-box;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
    margin-top: 5px;
    path {
      stroke: ${({ isActive }) => (isActive ? Colors.accent : Colors.primary)};
    }
  }
`;

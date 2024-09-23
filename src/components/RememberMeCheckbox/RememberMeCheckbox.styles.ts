import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

export const RememberMe = styled.div`
  display: flex;
  label {
    margin-left: 6px;
    font-size: 1rem;
    color: #4a4a4a;
  }
  input {
    appearance: none;
    background-color: ${Colors.bg_white};
    border: 2px solid ${Colors.primary};
    border-radius: 4px;
    width: 15px;
    height: 15px;
    display: inline-block;
    position: relative;
    margin-top: 2px;
    cursor: pointer;
    &:checked {
      background-color: ${Colors.bg_white};
      border-color: ${Colors.accent};
      &::before {
        content: '';
        position: absolute;
        left: 3px;
        top: 1px;
        width: 5px;
        height: 7px;
        border: 1px solid ${Colors.accent};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
`;

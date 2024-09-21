import { Colors } from 'core/variables/constants';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'onest', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const ImageContainer = styled.div`
  flex-grow: 6;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const FormContainer = styled.div`
  flex-grow: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 400px;
    height: 637px;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    box-sizing: border-box;
    label {
      color: ${Colors.primary};
      font-size: 18px;
      display: block;
    }
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Title = styled.div`
  color: ${Colors.primary};
  font-size: 2rem;
  font-weight: 700;
`;

export const SubTitle = styled.div`
  color: ${Colors.secondary};
  font-size: 1rem;
  font-weight: 400;
`;
export const AuthActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  a {
    text-decoration: none;
    color: ${Colors.accent};
    font-size: 16px;
  }
`;

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
    margin-top: 4px;
    cursor: pointer;
    &:checked {
      background-color: ${Colors.bg_white};
      border-color: ${Colors.accent};
      &::before {
        content: '';
        position: absolute;
        left: 2px;
        width: 5px;
        height: 7px;
        border: 1px solid ${Colors.accent};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
`;
export const ActionToReg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 16px;
  a {
    text-decoration: none;
    color: ${Colors.accent};
    font-size: 1rem;
  }
  div {
    color: ${Colors.primary};
    font-size: 18px;
    display: block;
    padding-right: 5px;
  }
`;
export const Body1 = styled.div`
  color: ${Colors.primary};
  font-size: 1rem;
  text-align: center;
  padding: 3rem;
`;
export const ErrorMessage = styled.div`
  color: ${Colors.error_stroke};
  font-size: 14px;
  margin-top: 4px;
  text-align: left;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
`;

export const SocialIconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 2px solid ${Colors.tertiary_stroke};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition:
    border-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    border-color: ${Colors.tertiary_stroke};
    transform: scale(1.05);
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

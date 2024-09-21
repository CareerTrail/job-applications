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
    button {
      margin-top: 24px;
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
export const ErrorMessage = styled.div`
  color: ${Colors.error_stroke};
  font-size: 14px;
  margin-top: 4px;
  text-align: left;
`;

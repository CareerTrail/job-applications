import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 637px;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
`;

export const AuthActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: ${Colors.accent};
    font-size: 16px;
  }
`;

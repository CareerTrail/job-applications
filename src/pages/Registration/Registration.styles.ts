import styled from 'styled-components';
import { Colors } from 'core/variables/constants';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
    height: 736px;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
`;

export const FIO = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Text = styled.span`
  font-size: 14px;
  color: ${Colors.secondary};
`;

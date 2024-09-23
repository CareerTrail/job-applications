import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    gap: 24px;
    svg {
      width: 3rem;
      height: 3rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 30%;
    }
  }
`;

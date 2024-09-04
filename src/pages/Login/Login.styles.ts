import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from 'core/variables/constants';

export const GlobalStyle = createGlobalStyle`  
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1920px;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 70%;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px 0 20px 20px;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
    position: relative;
  }
  @media (max-width: 1920px) {
    width: 70%;
  }
`;

export const TitleImg = styled.div`
  font-family: 'onest', sans-serif;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 467px;
  height: 231px;
`;

export const Title1Image = styled.div`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
`;
export const Title2Image = styled.div`
  padding-top: 12px;
  color: #fff;
  text-align: center;
  font-size: 16px;
`;

export const Slider = styled.div`
  width: 467px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 0.3em;
    }

    a {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #fff;
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;
    }
    a.active {
      background-color: ${Colors.accent};
    }
  }
`;

export const FormContainer = styled.div`
  position: relative;
  margin-left: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  form {
    max-width: 400px;
    max-height: 637px;
  }
  @media (max-width: 1920px) {
    width: 30%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Title = styled.div`
  color: ${Colors.primary};
  font-size: 32px;
  font-weight: 700;
`;

export const SubTitle = styled.div`
  color: ${Colors.secondary};
  font-size: 18px;
  font-weight: 400;
`;

export const Form = styled.div`
  margin: 24px 0px;
  label {
    color: ${Colors.primary};
    font-size: 18px;
    display: block;
  }
`;

export const AuthActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  height: 20px;
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
    font-size: 16px;
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
    font-size: 16px;
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
  font-size: 16px;
  text-align: center;
  padding: 48px;
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

  img {
    width: 32px;
    height: 32px;
  }
`;

export const ErrorMessage = styled.div`
  color: ${Colors.error_stroke};
  font-size: 14px;
  margin-top: 4px;
  text-align: left;
`;

import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from 'core/variables/constants';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 1334px;
  height: 1040px;
  top: 20px;
  left: 20px;
  border-radius: 40px 0px 0px 0px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 637px;
  top: 222px;
  left: calc(20px + 1334px + 48px + 20px);
  bottom: 20px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title1 = styled.div`
  color: ${Colors.primary};
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

export const Title2 = styled.div`
  color: ${Colors.secondary};
  font-size: 18px;
  font-weight: 400px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const LaberForEmail = styled.label`
  color: ${Colors.primary};
  font-size: 18px;
  margin-top: 16px;
  display: block;
`;

export const AuthActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 24px;
`;

export const CheckBox = styled.input`
  appearance: none;
  background-color: ${Colors.bg_white};
  border: 2px solid ${Colors.primary};
  border-radius: 4px;
  width: 15px;
  height: 15px;
  display: inline-block;
  position: absolute;
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
`;

export const RememberMeLabel = styled.label`
  margin-left: 20px;
  font-size: 16px;
  color: #4a4a4a;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.accent};
  font-size: 16px;
`;

export const ActionToReg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 16px;
`;

export const LaberForReg = styled.div`
  color: ${Colors.primary};
  font-size: 18px;
  display: block;
  padding-right: 5px;
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

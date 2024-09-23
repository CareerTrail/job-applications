import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

export const ImageWithPadding = styled.div`
  width: 100%;
  height: calc(100vh - 20px);
  background-image: url('src/assets/images/auth/login-bg.png');
  background-size: cover;
  background-position: center;
  margin: 10px 0 10px 10px;
  border-radius: 40px;
  position: relative;
  z-index: 1;
`;

export const TitleImg = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 467px;
  height: 231px;
  color: ${Colors.bg_white};
  text-align: center;
  h1 {
    font-size: 2rem;
    font-weight: 500;
    padding: 0 1rem;
  }
  h2 {
    padding-top: 12px;
    font-size: 1rem;
    font-weight: 400;
  }
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
  svg {
    width: 2rem;
    height: 2rem;
  }
  svg path {
    stroke: ${Colors.bg_white};
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

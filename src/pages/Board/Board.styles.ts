import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from 'core/variables/constants';

export const GlobalStyle = createGlobalStyle`  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${Colors.primary};
  font-family: 'onest', sans-serif;
  }
  a{
    text-decoration: none;
     display: flex;
    align-items: center; 
    text-decoration: none;
    color: ${Colors.primary};
  }
  a svg{
    width: 20px;
    height: 20px;
  }
  a:hover{
    background-color: ${Colors.bg_asside};
    color: ${Colors.accent};
  }
  a:hover svg path {
  stroke: ${Colors.accent};
  }
  li {
    margin-bottom: 8px; 
  }
  li:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  background-color: ${Colors.tertiary_stroke};
  display: flex;
`;

export const SideBar = styled.div`
  border-radius: 24px;
  padding: 32px;
  margin: 20px;
  height: calc(100vh - 40px);
  background-color: ${Colors.bg_white};
  flex-grow: 1;
`;

export const Logo = styled.div`
  a {
    color: ${Colors.accent};
    font-size: 2rem;
    line-height: normal;
  }
`;

export const Navigation = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${Colors.tertiary_stroke};
`;

export const Profile = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${Colors.tertiary_stroke};
`;
export const Sections = styled.div`
  ul {
    list-style-type: none;
  }
  svg {
    margin-right: 12px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95%;
`;
export const Top = styled.div``;
export const Trackers = styled.div`
  padding: 2rem 0;
  a {
    position: relative;
    top: 2px;
  }
  a:hover {
    background-color: transparent;
    transform: scale(1.1);
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  ul {
    padding-top: 1rem;
    list-style-type: inherit;
    margin-left: 1rem;
  }
  li {
    color: ${Colors.accent};
  }
`;
export const Bottom = styled.div``;

//BOARD ITEM

export const BoardItem = styled.div`
  border-radius: 24px;
  height: 100vh;
  background-color: ${Colors.bg_white};
  flex-grow: 16;
  padding: 32px;
  margin: 20px 18px 20px 0;
  height: calc(100vh - 40px);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderTitle = styled.div`
  color: ${Colors.primary};
  font-weight: 700;
  font-size: 1.5rem;
`;
export const HeaderBoard = styled.div``;
export const HeaderFilter = styled.div``;

import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $isCollapsed: boolean }>`
  position: relative;
  border-radius: 24px;
  padding: 32px;
  margin: 20px;
  height: calc(100vh - 40px);
  background-color: ${Colors.bg_white};
  flex-grow: 1;
  width: ${(props) => (props.$isCollapsed ? '80px' : '240px')};
  transition: width 0.3s ease;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${Colors.primary};
    svg {
      width: 20px;
      height: 20px;
    }
  }
  a:hover {
    background-color: ${Colors.bg_asside};
    color: ${Colors.accent};
    svg path,
    svg circle {
      stroke: ${Colors.accent};
    }
  }
  ul {
    list-style-type: none;
    li {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
export const LogoWrapper = styled.a`
  pointer-events: none;
  svg {
    transform: scale(2.4);
    transition: transform 0.3s;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  right: -1rem;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  background-color: ${Colors.bg_white};
  border-radius: 50%;
  z-index: 0;
  svg:hover {
    transform: scale(1.3);
  }
  a:hover {
    background-color: transparent;
  }
`;

export const CircleLink = styled.a<{ $isCollapsed: boolean }>`
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%)
    rotate(${(props) => (props.$isCollapsed ? '180deg' : '0deg')});
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
`;

export const SectionsWrapper = styled.div`
  svg {
    margin-right: 12px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95%;
`;

export const Navigation = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${Colors.tertiary_stroke};
  position: relative;
  z-index: 1;
`;

export const Trackers = styled.div`
  padding: 2rem 0;
  img {
    width: 20px;
    height: 20px;
    &:hover {
      transform: scale(1.1);
    }
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ul {
      padding-top: 1rem;
      margin-left: 1rem;
      li {
        color: ${Colors.accent};
      }
    }
  }
`;

import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    color: ${Colors.primary};
    font-size: 2rem;
    font-weight: 700;
  }
  h2 {
    color: ${Colors.secondary};
    font-size: 1rem;
    font-weight: 400;
  }
  span {
    color: ${Colors.accent};
  }
`;

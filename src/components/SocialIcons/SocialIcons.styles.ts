import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

export const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
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

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

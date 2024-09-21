import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 24px 0;
  a {
    color: ${Colors.accent};
  }
`;
export const FormBody = styled.div`
  color: ${Colors.primary};
  font-size: 1rem;
  text-align: center;
`;
export const ErrorMessage = styled.div`
  color: ${Colors.error_stroke};
  font-size: 14px;
  margin-top: 4px;
  text-align: left;
`;

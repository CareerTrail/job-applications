import { Link } from 'react-router-dom';
import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

const FormActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  a {
    text-decoration: none;
    color: ${Colors.accent};
    font-size: 1rem;
  }
  div {
    color: ${Colors.primary};
    font-size: 18px;
    display: block;
    padding-right: 5px;
  }
`;

interface FormActionProps {
  helpText: string;
  clickText: string;
  redirectPath: string;
}

const FormAction: React.FC<FormActionProps> = ({
  helpText,
  clickText,
  redirectPath,
}) => (
  <FormActions>
    <div>{helpText}</div>
    <Link to={redirectPath}>{clickText}</Link>
  </FormActions>
);

export default FormAction;

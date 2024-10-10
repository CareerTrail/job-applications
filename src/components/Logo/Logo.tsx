import logo from 'assets/images/sidebar/logo.png';
import styled from 'styled-components';
import { Colors } from 'core/variables/constants';

const Wraper = styled.div`
  a {
    color: ${Colors.accent} !important;
    font-size: 2rem;
    line-height: normal;
  }
`;

const Logo = () => {
  return (
    <Wraper>
      <a href="#">
        Job
        <img src={logo} style={{ width: '25px', height: '25px' }} />
        Box
      </a>
    </Wraper>
  );
};
export default Logo;

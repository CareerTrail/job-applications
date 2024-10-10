import { ASIDEBAR_TEXTS } from 'core/variables/locales';
import Home from 'assets/images/sidebar/home.svg';
import Resume from 'assets/images/sidebar/resume.svg';
import AI from 'assets/images/sidebar/ai.svg';
import Cloud from 'assets/images/sidebar/cloud.svg';
import Chrome from 'assets/images/sidebar/chrome.svg';
import User from 'assets/images/sidebar/profile.svg';
import Metrics from 'assets/images/sidebar/metrics.svg';
import plus from 'assets/images/sidebar/plus.png';
import Settings from 'assets/images/sidebar/settings.svg';
import Exit from 'assets/images/sidebar/Exit.svg';
import Logo from 'components/Logo';
import styled from 'styled-components';
import { Colors } from 'core/variables/constants';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const Wrapper = styled.div`
  border-radius: 24px;
  padding: 32px;
  margin: 20px;
  height: calc(100vh - 40px);
  background-color: ${Colors.bg_white};
  flex-grow: 1;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${Colors.primary};
  }
  a svg {
    width: 20px;
    height: 20px;
  }
  a:hover {
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
const Sections = styled.div`
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
const Navigation = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${Colors.tertiary_stroke};
`;
const Profile = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${Colors.tertiary_stroke};
`;
const Trackers = styled.div`
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

const SideBar = () => {
  const title = useSelector((state: RootState) => state.board.title);
  return (
    <Wrapper>
      <Logo />
      <Sections>
        <div>
          <Navigation>
            <ul>
              <li>
                <a href="#">
                  <Home />
                  {ASIDEBAR_TEXTS.HOME}
                </a>
              </li>
              <li>
                <a href="#">
                  <Resume />
                  {ASIDEBAR_TEXTS.RESUME_BUILDER}
                </a>
              </li>
              <li>
                <a href="#">
                  <AI />
                  {ASIDEBAR_TEXTS.AI_LETTERS}
                </a>
              </li>
              <li>
                <a href="#">
                  <Cloud />
                  {ASIDEBAR_TEXTS.AUTOFILL_APPS}
                </a>
              </li>
              <li>
                <a href="#">
                  <Chrome />
                  {ASIDEBAR_TEXTS.CHROME_EXT}
                </a>
              </li>
            </ul>
          </Navigation>
          <Profile>
            <ul>
              <li>
                <a href="#">
                  <User />
                  {ASIDEBAR_TEXTS.PROFILE}
                </a>
              </li>
              <li>
                <a href="#">
                  <Metrics />
                  {ASIDEBAR_TEXTS.METRICS}
                </a>
              </li>
            </ul>
          </Profile>
          <Trackers>
            <div>
              {ASIDEBAR_TEXTS.MY_TRACKERS}
              <a href="#" style={{ display: 'inline-block' }}>
                <img src={plus} style={{ width: '20px', height: '20px' }} />
              </a>
            </div>
            <div>
              <ul>
                <li>{title}</li>
              </ul>
            </div>
          </Trackers>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">
                <Exit />
                {ASIDEBAR_TEXTS.LOG_OUT}
              </a>
            </li>
            <li>
              <a href="#">
                <Settings />
                {ASIDEBAR_TEXTS.SETTINGS}
              </a>
            </li>
          </ul>
        </div>
      </Sections>
    </Wrapper>
  );
};
export default SideBar;

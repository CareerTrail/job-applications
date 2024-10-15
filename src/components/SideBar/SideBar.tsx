import { ReactNode } from 'react';
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
import Left from 'assets/images/left.svg';
import LogoSmall from 'assets/images/logoSmall.svg';
import Bag from 'assets/images/sidebar/bag.svg';
import Logo from 'components/Logo';
import { Pages } from 'core/variables/constants';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useAuth } from 'shared/hooks/authHooks';
import { useNavigate } from 'react-router-dom';
import {
  Circle,
  LogoWrapper,
  Navigation,
  CircleLink,
  SectionsWrapper,
  Trackers,
  Wrapper,
} from './styles';

type SideBarProps = {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
};

const SideBar: React.FC<SideBarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const title = useSelector((state: RootState) => state.board.title);

  const handleLogout = () => {
    logout();
    navigate(Pages.Login);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logo = isCollapsed ? (
    <LogoWrapper>
      <LogoSmall />
    </LogoWrapper>
  ) : (
    <Logo />
  );

  const renderNavItem = (
    icon: ReactNode,
    text: string,
    onClick?: () => void
  ) => (
    <li>
      <a href="#" onClick={onClick}>
        {icon}
        {!isCollapsed && text}
      </a>
    </li>
  );

  return (
    <Wrapper $isCollapsed={isCollapsed}>
      {logo}
      <SectionsWrapper>
        <div>
          <Navigation>
            <ul>
              {renderNavItem(<Home />, ASIDEBAR_TEXTS.HOME)}
              {renderNavItem(<Resume />, ASIDEBAR_TEXTS.RESUME_BUILDER)}
              {renderNavItem(<AI />, ASIDEBAR_TEXTS.AI_LETTERS)}
              {renderNavItem(<Cloud />, ASIDEBAR_TEXTS.AUTOFILL_APPS)}
              {renderNavItem(<Chrome />, ASIDEBAR_TEXTS.CHROME_EXT)}
            </ul>
          </Navigation>
          <Navigation>
            <ul>
              {renderNavItem(<User />, ASIDEBAR_TEXTS.PROFILE)}
              {renderNavItem(<Metrics />, ASIDEBAR_TEXTS.METRICS)}
            </ul>
          </Navigation>
          <Trackers>
            {!isCollapsed ? (
              <>
                <div>
                  {ASIDEBAR_TEXTS.MY_TRACKERS}
                  <a
                    href="#"
                    style={{
                      backgroundColor: 'transparent',
                    }}
                  >
                    <img src={plus} />
                  </a>
                </div>
                <div>
                  <ul>
                    <li>{title}</li>
                  </ul>
                </div>
              </>
            ) : (
              <a href="#">
                <Bag />
              </a>
            )}
          </Trackers>
        </div>
        <div>
          <ul>
            {renderNavItem(<Exit />, ASIDEBAR_TEXTS.LOG_OUT, handleLogout)}
            {renderNavItem(<Settings />, ASIDEBAR_TEXTS.SETTINGS)}
          </ul>
        </div>
      </SectionsWrapper>
      <Circle>
        <CircleLink $isCollapsed={isCollapsed} href="#" onClick={toggleSidebar}>
          <Left />
        </CircleLink>
      </Circle>
    </Wrapper>
  );
};
export default SideBar;

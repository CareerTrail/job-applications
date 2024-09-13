import { useState } from 'react';
import logo from 'assets/images/sidebar/logo.png';
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
import {
  GlobalStyle,
  Wrapper,
  SideBar,
  Logo,
  Navigation,
  Profile,
  Sections,
  Top,
  Trackers,
  Bottom,
  BoardItem,
  Header,
  HeaderTitle,
  HeaderBoard,
  HeaderFilter,
} from './Board.styles';

export const Board = () => {
  const [title] = useState('Job Search August');
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <SideBar>
          <Logo>
            <a href="#">
              Job
              <img src={logo} style={{ width: '25px', height: '25px' }}></img>
              Box
            </a>
          </Logo>
          <Sections>
            <Top>
              <Navigation>
                <ul>
                  <li>
                    <a href="#">
                      <Home />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Resume />
                      Resume Builder
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AI />
                      AI Cover Leters & More
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Cloud />
                      Autofill Applications
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Chrome />
                      Chrome Extension
                    </a>
                  </li>
                </ul>
              </Navigation>
              <Profile>
                <ul>
                  <li>
                    <a href="#">
                      <User />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Metrics />
                      Metrics
                    </a>
                  </li>
                </ul>
              </Profile>
              <Trackers>
                <div>
                  My Job Trackers
                  <a href="#" style={{ display: 'inline-block' }}>
                    <img
                      src={plus}
                      style={{ width: '20px', height: '20px' }}
                    ></img>
                  </a>
                </div>
                <div>
                  <ul>
                    <li>{title}</li>
                  </ul>
                </div>
              </Trackers>
            </Top>
            <Bottom>
              <ul>
                <li>
                  <a href="#">
                    <Exit />
                    Log Out
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Settings />
                    Settings
                  </a>
                </li>
              </ul>
            </Bottom>
          </Sections>
        </SideBar>
        <BoardItem>
          <Header>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderBoard>
              <button>Board</button>
              <button>Calendar</button>
            </HeaderBoard>
            <HeaderFilter>Filter</HeaderFilter>
          </Header>
        </BoardItem>
      </Wrapper>
    </>
  );
};

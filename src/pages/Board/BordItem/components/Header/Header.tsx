import { useState } from 'react';
import { BOARD_TEXTS, SWITCH_VALUES } from 'core/variables/locales';
import styled from 'styled-components';
import { Colors } from 'core/variables/constants';
import Search from 'assets/images/components/search.svg';
import Switches from 'components/Switches';
import Filters from 'components/Filters';
import AddEvent from 'components/Button/AddEventBtn';
import SwitchesMini from 'components/Switches/mini';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderTitle = styled.div`
  color: ${Colors.primary};
  font-weight: 700;
  font-size: 1.5rem;
`;
const HeaderFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;
const SearchWrapper = styled.div`
  border: 1px solid ${Colors.tertiary_stroke};
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2px;
`;

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [activeSwitch, setActiveSwitch] = useState<
    (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES]
  >(SWITCH_VALUES.BOARD);

  const handleSwitchChange = (
    value: (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES]
  ) => {
    setActiveSwitch(value);
  };

  return (
    <Wrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <div>
        <Switches
          leftLabel={BOARD_TEXTS.BOARD}
          rightLabel={BOARD_TEXTS.CALENDAR}
          onSwitchChange={handleSwitchChange}
        />
      </div>
      <HeaderFilter>
        {activeSwitch === SWITCH_VALUES.BOARD ? (
          <SwitchWrapper>
            <SearchWrapper>
              <Search />
            </SearchWrapper>
            <Filters
              children={BOARD_TEXTS.FILTER}
              variant={BOARD_TEXTS.VARIANT}
              disabled={BOARD_TEXTS.DISABLED}
            />
          </SwitchWrapper>
        ) : (
          <SwitchWrapper>
            <SearchWrapper>
              <Search />
            </SearchWrapper>
            <AddEvent children={BOARD_TEXTS.EVENT} />
            <SwitchesMini
              onSwitchChange={handleSwitchChange}
              activeValue={activeSwitch}
            />
          </SwitchWrapper>
        )}
      </HeaderFilter>
    </Wrapper>
  );
};

export default Header;

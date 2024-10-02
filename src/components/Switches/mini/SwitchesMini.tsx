import { useState, ComponentProps } from 'react';
import BoardIcon from 'assets/images/components/board.svg';
import CalendarIcon from 'assets/images/components/calendar.svg';
import { SWITCH_VALUES } from 'core/variables/locales';
import {
  ParentWrapper,
  Wrapper,
  LeftButton,
  RightButton,
} from './SwitchesMini.styles';

interface SwitchesMiniProps extends ComponentProps<'button'> {
  onSwitchChange?: (
    value: (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES]
  ) => void;
  activeValue?: (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES];
}

const SwitchesMini: React.FC<SwitchesMiniProps> = ({
  onSwitchChange,
  activeValue,
}) => {
  const [activeButton, setActiveButton] = useState<
    (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES]
  >(activeValue || SWITCH_VALUES.BOARD);

  const handleSwitchChange = (
    value: (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES]
  ) => {
    setActiveButton(value);
    if (onSwitchChange) {
      onSwitchChange(value);
    }
  };

  return (
    <ParentWrapper>
      <Wrapper>
        <LeftButton
          isActive={activeButton === SWITCH_VALUES.BOARD}
          onClick={() => handleSwitchChange(SWITCH_VALUES.BOARD)}
        >
          <div>
            <BoardIcon />
          </div>
        </LeftButton>
        <RightButton
          isActive={activeButton === SWITCH_VALUES.CALENDAR}
          onClick={() => handleSwitchChange(SWITCH_VALUES.CALENDAR)}
        >
          <div>
            <CalendarIcon />
          </div>
        </RightButton>
      </Wrapper>
    </ParentWrapper>
  );
};

export default SwitchesMini;

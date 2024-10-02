import React, { useState, ComponentProps } from 'react';
import BoardIcon from 'assets/images/components/board.svg';
import CalendarIcon from 'assets/images/components/calendar.svg';
import { SWITCH_VALUES } from 'core/variables/locales';
import { Wrapper, LeftButton, RightButton } from './Switches.styles';

interface SwitchesProps extends ComponentProps<'button'> {
  leftLabel?: React.ReactNode;
  rightLabel?: React.ReactNode;
  onSwitchChange?: (
    value: (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES]
  ) => void;
}

const Switches: React.FC<SwitchesProps> = ({
  leftLabel,
  rightLabel,
  onSwitchChange,
}) => {
  const [activeButton, setActiveButton] = useState<
    (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES]
  >(SWITCH_VALUES.BOARD);

  const handleSwitchChange = (
    value: (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES]
  ) => {
    setActiveButton(value);
    if (onSwitchChange) {
      onSwitchChange(value);
    }
  };

  return (
    <Wrapper>
      <LeftButton
        isActive={activeButton === SWITCH_VALUES.BOARD}
        onClick={() => handleSwitchChange(SWITCH_VALUES.BOARD)}
      >
        <div>
          <BoardIcon />
        </div>
        {leftLabel}
      </LeftButton>
      <RightButton
        isActive={activeButton === SWITCH_VALUES.CALENDAR}
        onClick={() => handleSwitchChange(SWITCH_VALUES.CALENDAR)}
      >
        <div>
          <CalendarIcon />
        </div>
        {rightLabel}
      </RightButton>
    </Wrapper>
  );
};

export default Switches;

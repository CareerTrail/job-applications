import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setActiveSwitch } from 'features/board/boardSlice'; // Импортируем экшен для обновления состояния
import BoardIcon from 'assets/images/components/board.svg';
import CalendarIcon from 'assets/images/components/calendar.svg';
import { SWITCH_VALUES } from 'core/variables/locales';
import { Wrapper, LeftButton, RightButton } from './Switches.styles';

interface SwitchesProps {
  leftLabel?: React.ReactNode;
  rightLabel?: React.ReactNode;
}

const Switches: React.FC<SwitchesProps> = ({ leftLabel, rightLabel }) => {
  const dispatch = useDispatch();
  const activeButton = useSelector(
    (state: RootState) => state.board.activeSwitch
  );

  const handleSwitchChange = (
    value: (typeof SWITCH_VALUES)[keyof typeof SWITCH_VALUES]
  ) => {
    dispatch(setActiveSwitch(value));
  };

  return (
    <Wrapper>
      <LeftButton
        $isActive={activeButton === SWITCH_VALUES.BOARD}
        onClick={() => handleSwitchChange(SWITCH_VALUES.BOARD)}
      >
        <div>
          <BoardIcon />
        </div>
        {leftLabel}
      </LeftButton>
      <RightButton
        $isActive={activeButton === SWITCH_VALUES.CALENDAR}
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

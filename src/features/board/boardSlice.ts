import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SWITCH_VALUES, BOARD_TEXTS } from 'core/variables/locales';

interface BoardState {
  activeSwitch: string;
  title: string;
}

const initialState: BoardState = {
  activeSwitch: SWITCH_VALUES.BOARD,
  title: BOARD_TEXTS.JOB_SEARCH_TITLE,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setActiveSwitch: (state, action: PayloadAction<string>) => {
      state.activeSwitch = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setActiveSwitch, setTitle } = boardSlice.actions;
export default boardSlice.reducer;

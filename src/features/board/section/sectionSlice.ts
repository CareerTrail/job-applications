import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sectionData } from 'core/variables/constants';
import { ButtonColor } from 'components/Button/AddPlus/AddPlus';

interface Section {
  color: ButtonColor;
  id: number;
  title: string;
}

interface SectionsState {
  sectionData: Section[];
}

const initialState: SectionsState = {
  sectionData: sectionData,
};

const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    updateSectionContent: (
      state,
      action: PayloadAction<{ id: number; content: string; color: ButtonColor }>
    ) => {
      const section = state.sectionData.find((s) => s.id === action.payload.id);
      if (section) {
        section.title = action.payload.content;
        section.color = action.payload.color;
      }
    },
  },
});

export const { updateSectionContent } = sectionSlice.actions;
export default sectionSlice.reducer;

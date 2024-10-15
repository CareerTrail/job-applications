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
    addSection: (state, action: PayloadAction<{ title: string }>) => {
      const newId =
        state.sectionData.length > 0
          ? Math.max(...state.sectionData.map((s) => s.id)) + 1
          : 1;
      const color = 'purple' as ButtonColor;
      const newSection: Section = {
        id: newId,
        title: action.payload.title,
        color,
      };
      state.sectionData.push(newSection);
    },
  },
});

export const { updateSectionContent, addSection } = sectionSlice.actions;
export default sectionSlice.reducer;

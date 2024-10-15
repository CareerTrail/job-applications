import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { vacanciesData } from 'core/variables/constants';

interface Vacancy {
  id: number;
  company: string;
  jobTitle: string;
  description: string;
  like: boolean;
  sectionId: number;
  createdDate: string;
}

interface VacanciesState {
  vacanciesData: Vacancy[];
}

const initialState: VacanciesState = {
  vacanciesData: vacanciesData,
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    addVacancy: (
      state,
      action: PayloadAction<{
        company: string;
        jobTitle: string;
        description: string;
        like: boolean;
        createdDate: string;
        sectionId: number;
      }>
    ) => {
      const newVacancy: Vacancy = {
        id: state.vacanciesData.length + 1,
        company: action.payload.company,
        jobTitle: action.payload.jobTitle,
        description: action.payload.description,
        like: action.payload.like,
        createdDate: action.payload.createdDate,
        sectionId: action.payload.sectionId,
      };
      state.vacanciesData.push(newVacancy);
    },
    setVacancies(state, action: PayloadAction<Vacancy[]>) {
      state.vacanciesData = action.payload;
    },
    toggleLike(state, action: PayloadAction<number>) {
      const vacancy = state.vacanciesData.find((v) => v.id === action.payload);
      if (vacancy) {
        vacancy.like = !vacancy.like;
      }
    },
    updateVacancySection: (
      state,
      action: PayloadAction<{ id: number; newSectionId: number }>
    ) => {
      const vacancy = state.vacanciesData.find(
        (v) => v.id === action.payload.id
      );
      if (vacancy) {
        vacancy.sectionId = action.payload.newSectionId;
      }
    },
  },
});

export const { addVacancy, setVacancies, toggleLike, updateVacancySection } =
  vacanciesSlice.actions;
export default vacanciesSlice.reducer;

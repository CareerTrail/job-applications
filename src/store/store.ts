import { configureStore } from '@reduxjs/toolkit';
import menuReducer from 'features/menu/menuSlice.ts';
import boardReducer from 'features/board/boardSlice';
import sectionReducer from 'features/board/section/sectionSlice';
import vacancyReducer from 'features/board/vacancy/vacancySlice';
import { api } from 'services/api.ts';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    menu: menuReducer,
    board: boardReducer,
    sections: sectionReducer,
    vacancies: vacancyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

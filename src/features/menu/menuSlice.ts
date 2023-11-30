import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface MenuSlice {
  currentValue: string;
}

const initialState: MenuSlice = {
  currentValue: "",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setNewMenuValue: (state, action: PayloadAction<string>) => {
      state.currentValue = action.payload;
    },
  },
});

export const { setNewMenuValue } = menuSlice.actions;

export default menuSlice.reducer;

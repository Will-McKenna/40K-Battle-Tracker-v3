import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  armyOptions: [],
  armySelected: null,
  armyCategory: "",
};

const armySlice = createSlice({
  name: "army",
  initialState,
  reducers: {
    categorySelect(state, action) {
      state.armyCategory = action.payload;
    },
    armySelect(state, action) {
      state.armySelected = action.payload;
    },
    setOptions(state, action) {
      state.armyOptions = action.payload;
    },
  },
});

export const { categorySelect, setOptions, armySelect } = armySlice.actions;

export default armySlice.reducer;

export const getImage = (state) => state.armySelected.image;
export const getName = (state) => state.armySelected.name;

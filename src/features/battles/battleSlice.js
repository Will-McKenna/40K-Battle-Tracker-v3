import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  battleView: false,
};

const battleSlice = createSlice({
  name: "battle",
  initialState,
  reducers: {
    setBattleView(state, action) {
      state.battleView = action.payload;
    },
  },
});

export const { setBattleView } = battleSlice.actions;

export default battleSlice.reducer;

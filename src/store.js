import { configureStore } from "@reduxjs/toolkit";
import armyReducer from "../src/features/army/armySlice";
import battleReducer from "../src/features/battles/battleSlice";

const store = configureStore({
  reducer: {
    army: armyReducer,
    battle: battleReducer,
  },
});

export default store;

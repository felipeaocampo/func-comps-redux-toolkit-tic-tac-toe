import { configureStore } from "@reduxjs/toolkit";

import gameSliceReducer from "./slices/gameSlice";

const store = configureStore({
  reducer: { game: gameSliceReducer },
});

// console.log(store.getState());

export default store;

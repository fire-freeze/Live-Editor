import { configureStore } from "@reduxjs/toolkit";
import codeState from "./slices/CodeSlice";
const store = configureStore({
  reducer: {
    codeState

  },
});

export default store
export const unsubscribeStore = store.subscribe(() => {
    console.log("STORE UPDATED: ", store.getState());
})
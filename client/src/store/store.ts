import { configureStore } from "@reduxjs/toolkit";
import codeState from "./slices/CodeSlice";
import explorerState from "./slices/ExplorerSlice";

const store = configureStore({
  reducer: {
    codeState,
    explorerState,

  },
});

export default store
export const unsubscribeStore = store.subscribe(() => {
    console.log("STORE UPDATED: ", store.getState());
})
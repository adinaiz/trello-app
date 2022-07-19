import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./mytodo-slice";
import uiSlice from "./uiSlice";

const store = configureStore({
   reducer: {
      task: taskSlice.reducer,
      ui: uiSlice.reducer,
   },
});

export default store;

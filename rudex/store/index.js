import { configureStore } from "@reduxjs/toolkit";

import firebaseSlice from "rudex/slice/firebaseSlice";

const store = configureStore({
  reducer: {
    firebaseState: firebaseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

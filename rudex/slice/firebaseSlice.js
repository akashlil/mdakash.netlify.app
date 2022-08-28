import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    user: "akas",
  },
  reducers: {
    logIn(state, action) {
      state.user = action.payload.user;
    },
    logOut(state, action) {
      state.user = null;
    },
  },
});

export const firebaseActions = firebaseSlice.actions;

export default firebaseSlice;

import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    user: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload.user;
    },
    signOuts: (state, action) => {
      state.user = null;
    },
  },
});

export const { signIn, signOuts } = firebaseSlice.actions;

export default firebaseSlice;

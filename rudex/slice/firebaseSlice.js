import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    user: "akas",
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload.user;
    },
    signOut: (state, action) => {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = firebaseSlice.actions;

export default firebaseSlice;

import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isSignedIn: false,
  name: "",
  email: "",
  photo: "",
  meta: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    setUserLoginDetails: (state, { type, payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.photo = payload.photo;
      state.isSignedIn = true;
      state.meta = payload.meta;
    },
    setSignOutState: (state) => {
      state.name = "";
      state.email = "";
      state.photo = "";
      state.isSignedIn = false;
      state.meta = null;
    },
  },
});

export const { setSignOutState, setUserLoginDetails } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export const isUserSignerIn = (state) => state.user.isSignedIn;

export default userSlice.reducer;

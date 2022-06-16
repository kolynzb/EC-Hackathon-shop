import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    llogin: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { llogin, logOut, register } = userSlice.actions;

export default userSlice.reducer;

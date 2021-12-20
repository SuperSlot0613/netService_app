import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    SET_USER: (state, action) => {
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    },
    SET_USERLOGOUT: (state, action) => {
      return {
        ...state,
        user: [],
      };
    },
  },
});

export const { SET_USER, SET_USERLOGOUT } = userSlice.actions;

// export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

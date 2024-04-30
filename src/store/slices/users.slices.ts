import { createSlice } from "@reduxjs/toolkit";
import { ProfileType, UserType } from "../../types/types";
import { getCurrentUser, getUsers } from "../actions/users.actions";

type StateType = {
  currentUser: null | ProfileType;
  users: UserType[];
  loading: boolean;
};

const INIT_STATE: StateType = {
  currentUser: null,
  users: [],
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INIT_STATE,
  reducers: {
    logout(state) {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload!;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload!;
      });
  },
});

export const { logout } = usersSlice.actions;

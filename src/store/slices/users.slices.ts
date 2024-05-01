import { createSlice } from "@reduxjs/toolkit";
import { ProfileType, UserType } from "../../types/types";
import { getCurrentUser, getOneUser, getUsers } from "../actions/users.actions";

export type StateType = {
  currentUser: null | ProfileType;
  users: ProfileType[];
  oneUser: ProfileType | null;
  loading: boolean;
};

const INIT_STATE: StateType = {
  currentUser: null,
  users: [],
  oneUser: null,
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
      })
      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.oneUser = action.payload!;
      });
  },
});

export const { logout } = usersSlice.actions;

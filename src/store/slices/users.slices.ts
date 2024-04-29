import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";
import { getUsers } from "../actions/users.actions";

type StateType = {
  currentUser: null | UserType;
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload!;
      });
  },
});

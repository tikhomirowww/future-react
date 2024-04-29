import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";
import axios from "axios";
import { API } from "../../helpers/consts";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user: UserType) => {
    try {
      await axios.post(API, user);
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const { data } = await axios.get<UserType[]>(API);
    return data;
  } catch (error) {
    console.log(error);
  }
});

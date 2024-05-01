import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";
import axios from "axios";
import { API } from "../../helpers/consts";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user: UserType) => {
    try {
      await axios.post(API, user);
    } catch (error) {
      console.log(error);
    }
  }
);

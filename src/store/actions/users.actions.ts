import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileType, UserType } from "../../types/types";
import axios from "axios";
import { API } from "../../helpers/consts";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user: UserType) => {
    try {
      await axios.post(API, {
        ...user,
        city: "",
        status: "",
        avatar: "",
        background: "",
        posts: [],
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    console.log(window.location.search);

    const { data } = await axios.get<ProfileType[]>(
      `${API}/${window.location.search}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async (id: string | number) => {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneUser = createAsyncThunk(
  "users/getOneUser",
  async (id: string | number) => {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeProfile = createAsyncThunk(
  "user/changeProfile",
  async (
    { id, user }: { id: string | number; user: ProfileType },
    { dispatch }
  ) => {
    try {
      await axios.put(`${API}/${id}`, user);
      dispatch(getCurrentUser(id));
    } catch (error) {
      console.log(error);
    }
  }
);

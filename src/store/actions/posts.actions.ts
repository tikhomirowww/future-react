import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardData } from "../../types/types";
import axios from "axios";
import { StringLiteral } from "typescript";
import { API } from "../../helpers/consts";
import { StateType } from "../slices/users.slices";
import { getCurrentUser } from "./users.actions";

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (
    { post, userId }: { post: CardData; userId: number | string },
    { getState, dispatch }
  ) => {
    const { users } = getState() as any;
    console.log(users);

    try {
      await axios.patch(`${API}/${userId}`, {
        posts: [...users.currentUser.posts, post],
      });
      dispatch(getCurrentUser(userId));
    } catch (error) {
      console.log(error);
    }
  }
);

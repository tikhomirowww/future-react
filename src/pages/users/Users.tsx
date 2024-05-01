import React, { useEffect } from "react";
import Friends from "../../ui/friends/Friends";
import styles from "./users.module.css";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { getUsers } from "../../store/actions/users.actions";
import { idText } from "typescript";

const Users = () => {
  const dispatch = useAppDispatch();
  const { users, currentUser } = useAppSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="container">
      {users
        .filter((item) => item.id !== currentUser?.id)
        .map((item) => (
          <Friends key={item.id} user={item} />
        ))}
    </div>
  );
};

export default Users;

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./edit.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ProfileType, UserType } from "../../types/types";
import Input from "../../ui/input/Input";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { changeProfile } from "../../store/actions/users.actions";
const EditProfile = () => {
  const [user, setUser] = useState<ProfileType>({
    name: "",
    email: "",
    password: "",
    phone: "",
    avatar: "",
    background: "",
    city: "",
    status: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.users);

  useEffect(() => {
    currentUser && setUser({ ...currentUser });
  }, [currentUser]);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = localStorage.getItem("currentUser");
    id && dispatch(changeProfile({ id, user }));
    navigate("/profile");
  }


  let filterdUser = Object.keys(user).filter((item) => item !== 'id' && item !== 'posts' && item !== 'password' && item !== 'password_confirm')


  return (
    <div className="container">
      <div className={styles.editProfile}>
        <Link to={"/profile"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="#000"
            viewBox="0 0 16 16"
            className={styles.arrow}
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </Link>
        <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit} className={styles.forma}>
      {filterdUser.map((item: string, index: number) => (
        <Input
          name={item}
          onChange={handleInputChange}
          key={index}
          value={(user[item] || "").toString()}
          label={item}
          placeholder={item}
        />
      ))}
      <button>Save Changes</button>
    </form>
      </div>
    </div>
  );
};

export default EditProfile;

import React, { useEffect } from "react";
import styles from "./profile.module.css";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { getCurrentUser, getOneUser } from "../../store/actions/users.actions";
import Button from "../../ui/button/Button";
import Post from "../../ui/posts/Post";

const Profile = () => {
  const dispatch = useAppDispatch();

  const { id: paramId } = useParams();

  useEffect(() => {
    if (paramId) {
      dispatch(getOneUser(paramId));
    } else {
      const id = localStorage.getItem("currentUser");
      id && dispatch(getCurrentUser(id));
    }
  }, []);

  const { currentUser, oneUser } = useAppSelector((state) => state.users);
  console.log(currentUser);

  const imageUrl = "";
  const avatarUrl = "";

  function getUser() {
    return paramId ? oneUser : currentUser;
  }

  return (
    <div className="container">
      {getUser() && (
        <div className={styles.profile}>
          <img
            src={
              getUser()?.background ||
              "https://taj.im/wp-content/uploads/2016/02/default.jpg"
            }
            alt="Profile"
            className={styles.backgroundImage}
          />

          <div className={styles.info}>
            <div>
              <img
                src={
                  getUser()?.avatar ||
                  "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                }
                alt="Logo"
                className={styles.avatar}
              />
            </div>
            <h3 className={styles.name}>
              <span>{getUser()?.name}</span>
            </h3>

            <div className={styles.about}>
              <p>Status: {getUser()?.status}</p>
            </div>
            <h5 className={styles.job}>
              <p>City: {getUser()?.city}</p>
              <p className={styles.contactInfo}>Контактная информация:</p>
              <ul className={styles.infoList}>
                <li>Email: {getUser()?.email}</li>
                <li>Phone: {getUser()?.phone}</li>
              </ul>
            </h5>
            {getUser()?.posts?.map((item, index) => (
              <Post post={item} key={index} />
            ))}
            <Link to="/add/post">
              <Button>New Post</Button>
            </Link>
            <button className={styles.edit}>
              <Link to={"/editProfile"}>Edit</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

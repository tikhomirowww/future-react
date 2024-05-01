import React, { useEffect } from "react";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { getCurrentUser } from "../../store/actions/users.actions";

const Profile = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const id = localStorage.getItem("currentUser");
    id && dispatch(getCurrentUser(id));
  }, []);

  const { currentUser } = useAppSelector((state) => state.users);

  const imageUrl = "";
  const avatarUrl = "";

  
  return (
    <div className="container">
      {currentUser && (
        <div className={styles.profile}>
          <img
            src={
              currentUser.background ||
              "https://taj.im/wp-content/uploads/2016/02/default.jpg"
            }
            alt="Profile"
            className={styles.backgroundImage}
          />

          <div className={styles.info}>
            <div>
              <img
                src={
                  currentUser.avatar ||
                  "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
                }
                alt="Logo"
                className={styles.avatar}
              />
            </div>
            <h3 className={styles.name}>
              <span>{currentUser.name}</span>
            </h3>

            <p className={styles.about}>
              <p>Status: {currentUser.status}</p> 
            </p>
            <h5 className={styles.job}>
              <p>City: {currentUser.city}</p> 
                <p className={styles.contactInfo}>Контактная информация:</p>
                <ul className={styles.infoList}>
                  <li>Email: {currentUser.email}</li>
                  <li>Phone: {currentUser.phone}</li>
                </ul>
            </h5>
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

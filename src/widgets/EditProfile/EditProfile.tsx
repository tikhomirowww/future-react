import React from "react";
import styles from "./edit.module.css";
import { Link } from "react-router-dom";
const EditProfile = () => {
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
        <form className={styles.forma}>
          <label>
            Name: <input type="text" placeholder="Name" />
          </label>
          <label>
            SurName: <input type="text" placeholder="SurName" />
          </label>
          <label>
            Job: <input type="text" placeholder="Your Job" />
          </label>
          <label>
            Email: <input type="email" placeholder="Email" />
          </label>
          <label>
            Password: <input type="password" placeholder="Password" />
          </label>
          <button>Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

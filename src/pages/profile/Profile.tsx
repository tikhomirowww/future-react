import React from "react";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";


const Profile = () => {

  const imageUrl = "";
  const avatarUrl = ""; 

  return (
    <div className="container">
      <div className={styles.profile}>
        {imageUrl && <img src={imageUrl} alt="Profile" className={styles.backgroundImage}/>}
        {!imageUrl && <img src='https://taj.im/wp-content/uploads/2016/02/default.jpg' alt="Default Profile" className={styles.backgroundImage} />}
        
        <div className={styles.info}>
          <div>
            {avatarUrl && <img src={avatarUrl} alt="Logo" className={styles.avatar}/>} 
            {!avatarUrl && <img src='https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg' alt="Default Logo" className={styles.avatar}/>} 
          </div>
          <h3 className={styles.name}><span>Name</span><span> Surname</span></h3>

          <h5 className={styles.job}>!Professinal Fronend Develepore</h5>

          <p className={styles.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vel excepturi natus ut explicabo? Provident maiores quod nihil amet, consequuntur at quibusdam, dolor, molestiae et eius quasi fugiat omnis aperiam perferendis fuga? Assumenda minus sunt corrupti accusamus accusantium esse ipsa voluptatem laborum id itaque? Cumque consequuntur ipsa quae eaque beatae.</p>
            <button className={styles.edit}><Link to={'/editProfile'}>Edit</Link></button>
        </div>

      </div>
    </div>
  );
};

export default Profile;


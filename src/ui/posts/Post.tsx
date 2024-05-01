import React from "react";
import styles from "./post.module.css";
import { CardData } from "../../types/types";

const Post: React.FC<{ post: CardData }> = ({ post }) => {
  const cardsData: CardData[] = [
    {
      image:
        "https://4pda.to/s/as6yrpWVu2z2lT1MCi5GIky1DKuiz2Pz0OlUN8Oq8qJo9W2.jpg?v=1677809640 ",
      tag: "Motivation",
      title: "The power of motivation",
      description:
        "Helpless, hopeless and powerless. We’ve all felt this many times. But giving up is never an option. Hope is what keeps us alive.",

      time: "2h ago",
    },
  ];

  return (
    <div className={styles.container}>
      {/* {cardsData.map((card, index) => ( */}
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          <img src={post.image} alt="Card Image" />
        </div>
        <div className={styles["card-body"]}>
          <span className={styles.tag}>{post.tag}</span>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
          <div className={styles.user}>
            {/* <img
                src={card.userImage}
                alt="User"
                className={styles.userImage}
              /> */}
            <div className={styles["user-info"]}>
              {/* <h5>{card.userName}</h5> */}
              <small>{post.time}</small>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Post;

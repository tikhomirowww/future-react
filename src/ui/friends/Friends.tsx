import React from 'react'
import styles from "./friends.module.css"
import { Link } from 'react-router-dom'

const user = false

const Friends = () => {
  return (
    <div className={styles.card}>

            <Link to={'/'}><img
            className={styles.usersAvatar}
            src={
              user ||
              "https://sun1-93.userapi.com/impf/DW4IDqvukChyc-WPXmzIot46En40R00idiUAXw/l5w5aIHioYc.jpg?quality=96&as=50x50,100x100,200x200,400x400&sign=10ad7d7953daabb7b0e707fdfb7ebefd&u=sMxW2caWLp1QPhK-jWVUJhAecZdUlsd44UvrOlpCGvQ&cs=200x200"
            }
            alt="Avatar"
          /></Link>

            <div className={styles.friendInfo}>
            <Link to={"/"}><h5 className={styles.name}>Тинкер</h5></Link>
            <p className={styles.volk}>Цитата</p>
            {/* <span>Кол-во друзей:0</span> */}
            </div>



            {/* <div className={styles.addFriend}>
            <p className={styles.addFriendClick}>Добавить в друзья</p>
            <p className={styles.friendRequest}>Запрос отправлен!</p>
            </div> */}



            {/* <div className={styles.deleteFriend}>
                <button className={styles.delete}>Подробнее</button>
                <button className={styles.open}>Открыть</button>
            </div> */}
    </div>
  )
}

export default Friends

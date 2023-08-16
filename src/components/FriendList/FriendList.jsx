import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        <li key={item.id} className={styles.item}>
          <span
            style={{
              backgroundColor: item.isOnline ? 'green' : 'red',
            }}
            className={styles.status}
          ></span>
          <img src={item.avatar} alt="User avatar" width="48" />
          <p className={styles.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

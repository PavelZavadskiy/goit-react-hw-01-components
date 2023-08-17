import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
        className={styles.status}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

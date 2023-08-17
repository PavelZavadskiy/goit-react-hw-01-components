import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} key={item.id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

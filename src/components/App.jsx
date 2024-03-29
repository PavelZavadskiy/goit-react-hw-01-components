import { Profile } from './Profile/Profile';
import user from '../json/user.json';
import { Statistics } from './Statistics/Statistics';
import dataset from '../json/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../json/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" dataset={dataset} />
      <Statistics dataset={dataset} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

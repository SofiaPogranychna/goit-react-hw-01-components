import { Profile } from "./Profile/Profile";
import user from "./data/user.json";
import { Statistics }  from "./Statistics/Statistics";
import data from "./data/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "./data/friends.json";
import { TransactionHistory } from "./Transactions/TransactionsList";
import transactions from "./data/transactions.json";
export const App = () => {
  return (
    
    <><Profile
      key={user.username}
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
      <Statistics
        key={data.statsistics}
        title="Upload stats"
        stats={data} />
    
      <FriendList friends={friends} />
    
      <TransactionHistory items={transactions} />
    </>
  );
};

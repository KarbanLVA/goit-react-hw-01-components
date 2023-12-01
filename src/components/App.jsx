import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';

import Statistics  from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';

import FriendsList from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>      
      <Profile 
        src={ user.avatar } 
        alt={user.username} 
        userName={user.username} 
        tag={user.tag} 
        location={user.location} 
        followersQuantity={user.stats.followers} 
        views={user.stats.views} 
        likes={user.stats.likes}
      />

      <Statistics 
        items={data}
        title='Upload stats'
      />
      

      <FriendsList items={friends}/>
      <TransactionHistory items={transactions}/>
      
      React homework template
    </div>
  );
};

// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }} 

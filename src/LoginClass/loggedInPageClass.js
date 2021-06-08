import React, { useContext } from 'react';
import { FirebaseContext } from './FirebaseClass';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const { user, firebaseInstance } = useContext(FirebaseContext);
  const history = useHistory();

  const handleSignOut = async () => {
    await firebaseInstance.logout();
    history.push('/signin');
  };

  return (
    <div>
      <h2>ダッシュボード</h2>
      <p>ログインしました。こんにちは {user.name ? user.name : null} さん</p>
      <hr />
      <button onClick={() => handleSignOut()}>サインアウト</button>
    </div>
  );
};

export default Dashboard;

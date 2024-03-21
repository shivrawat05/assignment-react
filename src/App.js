import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import UserInfo from './components/UserInfo';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <h1>Countdown Timer</h1>
      <CountdownTimer />
      <h1>User Info</h1>
      <UserInfo />
    </div>
  );
}

export default App;

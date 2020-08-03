import React from 'react';
import friends from './image/friends.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>I am oumayma</h2>
      <h3>my react app deployment</h3>
      <img src={friends} alt="profile-image" />
    </div>
  );
}

export default App;

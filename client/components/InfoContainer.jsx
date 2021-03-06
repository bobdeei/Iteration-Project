import React from 'react';

const InfoContainer = ({ user, clickCount }) => (
  <div className="currentUser">
    <h3>
      <strong>{user.username} </strong>
    </h3>
    <p id="user-best-record">Best Record: {user.bestRecord}</p>
    <p id="user-click-count">Click Count: {clickCount}</p>
  </div>
);

export default InfoContainer;

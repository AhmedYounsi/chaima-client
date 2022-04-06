import React from 'react';
import WelcomeCard from './WelcomeCard';
import './Dashboard.scss';

function Dashboard() {
  return (
    <div className="div-dashboard-global">
      <div className="blockA">
        <div className="WelcomeCard">
          <WelcomeCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

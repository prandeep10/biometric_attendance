import React from 'react';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = ({ username }) => {
  return (
    <div className="dashboard-container">
      <h2 className="welcome-message">Welcome Firstname Lastname, {username}</h2>
      <div className="box-container">
        <div className="box">
          <p>Profile Completion</p>
          <span>54%</span>
          <a href='/profile'>Complete profile</a>
        </div>
        <div className="box">
          <p>Roll No</p>
          <span>20/xxx</span>
        </div>
        <div className="box">
          <p>Semester</p>
          <span>7</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import './FunctionalitySection.css'; // Import your CSS file for styling

const FunctionalitySection = () => {
  return (
    <div className="functionality-container">
      <div className="card">
        <h3>Push Notification</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Send Notification</button>
      </div>
      <div className="card">
        <h3>Profile Update</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Update Profile</button>
      </div>
      <div className="card">
        <h3>Time Table</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>View Time Table</button>
      </div>
      <div className="card">
        <h3>Attendance Checker</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Check Attendance</button>
      </div>
      <div className="card">
        <h3>Class Notes</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>View Class Notes</button>
      </div>
    </div>
  );
};

export default FunctionalitySection;

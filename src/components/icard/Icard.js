import React from 'react';
import './Icard.css';

const IDCard = () => {
  return (
    <div className="icard-container">
      <div className="avatar">
        <img src='https://cdn-icons-png.freepik.com/512/147/147142.png' alt="Avatar" />
      </div>
      <div className="icard-details">
        <h2>John Doe</h2>
        <p>Student</p>
        <p>Electronics and Telecommunications</p>
      </div>
    </div>
  );
};

export default IDCard;

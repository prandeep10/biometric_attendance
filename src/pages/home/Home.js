// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Faculty Portal</h1>
      <p className="description">
        Empower your teaching experience with our comprehensive Faculty Portal. Manage attendance, create and manage classes, and access class records seamlessly.
      </p>
      <div className="features">
        <div className="feature">
          <h2>Manage Attendance</h2>
          <p>Effortlessly track and manage student attendance records. Stay organized and informed about your students' attendance patterns.</p>
        </div>
        <div className="feature">
          <h2>Create Classes</h2>
          <p>Create and manage classes with ease. Add details such as subject, topic, time, and more to keep your class schedule organized.</p>
        </div>
        <div className="feature">
          <h2>Access Class Records</h2>
          <p>Access detailed class records to track student progress, grades, and attendance history. Stay up-to-date with your class performance.</p>
        </div>
      </div>
      <div className="cta">
        <button className="explore-btn">Explore More</button>
      </div>
    </div>
  );
};

export default Home;

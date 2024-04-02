import React from 'react';
import './AttendancePage.css'; // Import your CSS file for styling
import SubjectCard from './SubjectCard';

const subjects = [
  { id: 1, name: 'Mathematics', total: 30, attended: 25 },
  { id: 2, name: 'Physics', total: 30, attended: 22 },
  { id: 3, name: 'Digital Electronics', total: 30, attended: 28 },
  { id: 4, name: 'Analog Communication', total: 30, attended: 26 },
  { id: 5, name: 'Microprocessors', total: 30, attended: 4 },
  // Add more subjects as needed
];

const AttendancePage = ({ name, rollNumber, semester }) => {

  return (
    <div className="attendance-container">
      <div className="student-info">
        <h2>{name}</h2>
        <p>Roll Number: {rollNumber}</p>
        <p>Semester: {semester}</p>
      </div>
      <div className="subject-cards">
        {subjects.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default AttendancePage;

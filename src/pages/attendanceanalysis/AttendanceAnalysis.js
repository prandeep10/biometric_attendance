import React, { useState, useEffect } from 'react';
import './AttendanceAnalysis.css';

const AttendanceAnalysis = () => {
  const [highestAttendance, setHighestAttendance] = useState([]);
  const [lowestAttendance, setLowestAttendance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/attendance_analysis.php');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setHighestAttendance(data.highest_attendance);
        setLowestAttendance(data.lowest_attendance);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="attendance-analysis-container">
      <h2>Attendance Analysis</h2>

      <div className="highest-attendance">
        <h3>Highest Attendance</h3>
        <ul>
          {highestAttendance.map((student, index) => (
            <li key={index}>{student.username} - {student.total_attendance}</li>
          ))}
        </ul>
      </div>

      <div className="lowest-attendance">
        <h3>Lowest Attendance</h3>
        <ul>
          {lowestAttendance.map((student, index) => (
            <li key={index}>{student.username} - {student.total_attendance}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceAnalysis;

import React, { useState, useEffect } from 'react';
import './ClassAttendance.css';

function Attendance() {
  const [subject, setSubject] = useState('');
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/class_attendance.php?subject=${subject}`);
      if (!response.ok) {
        throw new Error('Failed to fetch logs');
      }
      const data = await response.json();
      setLogs(data);
      setErrorMessage('');
    } catch (error) {
      setLogs([]);
      setErrorMessage('Failed to fetch logs. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch logs initially
    fetchLogs();

    // Set interval to fetch logs every 3 seconds
    const intervalId = setInterval(fetchLogs, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [subject]); // Re-run effect whenever subject changes

  return (
    <div className="attendance-container">
      <h2>Class Attendance</h2>
      <div className="form-container">
        <label htmlFor="subject">Select Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
          placeholder="Enter subject..."
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="logs-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Serial Number</th>
              <th>Fingerprint ID</th>
              <th>Check-in Date</th>
              <th>Time In</th>
              <th>Time Out</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.username}</td>
                <td>{log.serialnumber}</td>
                <td>{log.fingerprint_id}</td>
                <td>{log.checkindate}</td>
                <td>{log.timein}</td>
                <td>{log.timeout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;

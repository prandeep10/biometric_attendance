import React, { useState, useEffect } from 'react';
import './user_logs.css';

function UsersLogs() {
  const [logs, setLogs] = useState([]);
  const [timeInFilter, setTimeInFilter] = useState('');
  const [timeOutFilter, setTimeOutFilter] = useState('');

  // Function to fetch data from the API
  const fetchLogs = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users_logs.php');
      const data = await response.json();
      setLogs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data initially and set up interval to fetch data every 5 seconds
  useEffect(() => {
    fetchLogs();
    const intervalId = setInterval(fetchLogs, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to handle time in filter change
  const handleTimeInFilterChange = (e) => {
    setTimeInFilter(e.target.value);
  };

  // Function to handle time out filter change
  const handleTimeOutFilterChange = (e) => {
    setTimeOutFilter(e.target.value);
  };

  // Filter logs based on time in and time out
  const filteredLogs = logs.filter(log => {
    return log.timein.includes(timeInFilter) && log.timeout.includes(timeOutFilter);
  });

  return (
    <div className="users-logs">
      <h2>Users Logs</h2>
      <div className="filter-container">
        <label htmlFor="time-in-filter">Filter by Time In:</label>
        <input
          type="text"
          id="time-in-filter"
          value={timeInFilter}
          onChange={handleTimeInFilterChange}
          placeholder="Enter time in..."
        />
        <label htmlFor="time-out-filter">Filter by Time Out:</label>
        <input
          type="text"
          id="time-out-filter"
          value={timeOutFilter}
          onChange={handleTimeOutFilterChange}
          placeholder="Enter time out..."
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Serial Number</th>
            <th>Check-in Date</th>
            <th>Time In</th>
            <th>Time Out</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.username}</td>
              <td>{log.serialnumber}</td>
              <td>{log.checkindate}</td>
              <td>{log.timein}</td>
              <td>{log.timeout}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersLogs;

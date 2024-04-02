import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AddClassForm.css';

function AddClassForm() {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/add_class_api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          topic,
          timein: timeIn,
          timeout: timeOut,
          checkIndate: checkInDate.toISOString().slice(0, 10), // Format as YYYY-MM-DD
        }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="addClassForm">
      <h2>Add Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeIn">Time In:</label>
          <input
            type="time"
            id="timeIn"
            value={timeIn}
            onChange={(e) => setTimeIn(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeOut">Time Out:</label>
          <input
            type="time"
            id="timeOut"
            value={timeOut}
            onChange={(e) => setTimeOut(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check-in Date:</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            dateFormat="yyyy-MM-dd"
            className="date-picker"
            required
          />
        </div>
        <button type="submit">Add Class</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default AddClassForm;

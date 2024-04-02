import React, { useState } from 'react';
import axios from 'axios';

function AddContent() {
  const [formData, setFormData] = useState({
    username: '',
    serialnumber: '',
    fingerprint_id: '',
    checkindate: '',
    timein: '',
    timeout: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.43.125:5000/users_logs', formData);
      console.log('New content added:', response.data);
      // Clear form data after successful submission
      setFormData({
        username: '',
        serialnumber: '',
        fingerprint_id: '',
        checkindate: '',
        timein: '',
        timeout: ''
      });
    } catch (error) {
      console.error('Error adding new content:', error);
    }
  };

  return (
    <div>
      <h2>Add New Content</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Serial Number:</label>
          <input type="text" name="serialnumber" value={formData.serialnumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Fingerprint ID:</label>
          <input type="text" name="fingerprint_id" value={formData.fingerprint_id} onChange={handleChange} required />
        </div>
        <div>
          <label>Check-in Date:</label>
          <input type="text" name="checkindate" value={formData.checkindate} onChange={handleChange} required />
        </div>
        <div>
          <label>Time In:</label>
          <input type="text" name="timein" value={formData.timein} onChange={handleChange} required />
        </div>
        <div>
          <label>Time Out:</label>
          <input type="text" name="timeout" value={formData.timeout} onChange={handleChange} required />
        </div>
        <button type="submit">Add Content</button>
      </form>
    </div>
  );
}

export default AddContent;

import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the styles for react-tabs
import './SignupPage.css'; // Import your CSS file for additional styling

const SignupPage = () => {
  return (
    <div className="signup-page">
      <Tabs>
        <TabList>
          <Tab>Student Signup</Tab>
          <Tab>Faculty Signup</Tab>
        </TabList>

        <TabPanel>
          <form className="signup-form">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Signup</button>
          </form>
        </TabPanel>

        <TabPanel>
          <form className="signup-form">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Signup</button>
          </form>
        </TabPanel>
      </Tabs>

      <div className="login-link">
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignupPage;

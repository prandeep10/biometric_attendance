import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the styles for react-tabs
import './LoginPage.css'; // Import your CSS file for additional styling

const LoginPage = () => {
  return (
    <div className="login-page">
      <Tabs>
        <TabList>
          <Tab>Student Login</Tab>
          <Tab>Faculty Login</Tab>
        </TabList>

        <TabPanel>
          <form className="login-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </TabPanel>

        <TabPanel>
          <form className="login-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </TabPanel>
      </Tabs>

      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;

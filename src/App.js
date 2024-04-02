import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AttendancePage from './pages/attendance/AttendancePage';
import Navbar from './components/navbar/Navbar';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/login/SignupPage';
import AddClassForm from './components/addsubject/AddClassForm';
import About from './pages/about/About';
import IDCard from './components/icard/Icard';
import UsersLogs from './pages/allattendance/user_logs';
import ClassAttendance from './pages/classattendance/ClassAttendance';
import AttendanceAnalysis from './pages/attendanceanalysis/AttendanceAnalysis';


const App = () => {
  const name = "John Doe";
  const rollNumber = "12345";
  const semester = "6";

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/classrecord" element={<AttendanceAnalysis/>} />
          <Route path="/addclass" element={<AddClassForm/>} />
          <Route path="/idcard" element={<IDCard/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<AddClassForm/>} />
          <Route path="/allattendance" element={<UsersLogs/>} />
          <Route path="/classattendance" element={<ClassAttendance/>} />
          <Route path="/attendance" element={<AttendancePage name={name} rollNumber={rollNumber} semester={semester}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

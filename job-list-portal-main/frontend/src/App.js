// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

export default App;

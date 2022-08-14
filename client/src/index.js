import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './context/AuthProvider';

import Logout from './pages/Logout';
import Login from './pages/Login';
import Register from './pages/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <AppNavbar />
        <Routes>
          < Route path="/" element={ <Home /> }/>
          < Route path="/logout" element={ <Logout /> }/>
          < Route path="/login" element={ <Login /> }/>
          < Route path="/register" element={ <Register /> }/>  
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

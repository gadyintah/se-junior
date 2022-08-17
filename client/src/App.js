import React from "react";
import "./App.css";
import Welcome from "./pages/Welcome";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import Logout from './components/Logout';
import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthContext from './context/AuthProvider';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};


function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {/* <AppNavbar /> */}
      <div className="App">{state.isAuthenticated ? 
      <><AppNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router></> 
      : 
      <><AppNavbar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router></> 
      }</div>
    </AuthContext.Provider>
  );
}
export default App;
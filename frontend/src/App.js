
import React from 'react';
import Dashboard from "./Dashboard";
import Books from "./Books";
import SignIn from './SignIn';
import SignUp from './SignUp';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
      <AuthProvider>
          <Router>
              <Routes>
                  <Route path="/" element={<SignIn />} />
                  <Route path="/home" element={<ProtectedRoute element={<Dashboard />} />} />
                  <Route path="/books" element={<Books />} />
                  <Route path="/logout" element={<SignIn/>}/>
                  <Route path="/register" element={<SignUp/>}/>
                  <Route path="/login" element={<SignIn/>}/>
              </Routes>
          </Router>
      </AuthProvider>
  );
}

export default App;

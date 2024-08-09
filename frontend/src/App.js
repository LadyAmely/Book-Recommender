
import React from 'react';
import Dashboard from "./Dashboard";
import Books from "./Books";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


function App() {
  return (


      <Router>
          <div className="App">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/home" element={<Dashboard/>}/>
                    <Route path="/books" element={<Books/>}/>
                </Routes>
          </div>
      </Router>
  );
}

export default App;

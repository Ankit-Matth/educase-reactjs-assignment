import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup setUserData={setUserData} />} />
          <Route path="/profile" element={<Profile userData={userData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

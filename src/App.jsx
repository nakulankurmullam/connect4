import React, { useContext } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Game from "./Components/Game";
import { FirebaseContext } from "./Context/Context";

function App() {
  const { user } = useContext(FirebaseContext);
  return (
    <>
      <Router>
        {!user && (
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/login" element={<Login />} /> 
          </Routes>
        )}
        {user && (
          <Routes>
            <Route path="/" element={<Home />} /> 
            {/* TODO: add the profiles and leaderboard etc... */} 
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;

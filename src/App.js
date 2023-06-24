import React from "react";
import "./App.css";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

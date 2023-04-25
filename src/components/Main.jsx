import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Info, Portfolio, AutonomousCollective, FitnessTracker, Arcade, StrangersThings } from "./";

const Main = () => {
  return (
    <div id="main">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Info />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default Main;

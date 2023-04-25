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
        <Route exact path="/autonomous-collective" element={<AutonomousCollective />} />
        <Route exact path="/fitness-tracker" element={<FitnessTracker />} />
        <Route exact path="/strangers-things" element={<StrangersThings/>}/>
        <Route exact path="/arcade" element={<Arcade />} />

      </Routes>
    </div>
  );
};

export default Main;

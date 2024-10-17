/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Incidents from "./components/pages/incidents/Incidents";
import StepBar from "./components/pages/incidents/Stepbar";
import React from "react";
import NewIncidents from "./components/pages/incidents/NewIncidents";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/incidents/stepbar" element={<StepBar />} />
          <Route path="/incidents/stepbar/newIncidents" element={<NewIncidents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

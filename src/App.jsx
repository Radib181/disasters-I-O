/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Incidents from "./components/pages/incidents/Incidents";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/incidents" element={<Incidents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Filter from "./components/shared/Filter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Filter />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

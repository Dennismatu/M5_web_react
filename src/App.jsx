import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Location from "./pages/Location";
import AddLocation from "./pages/AddLocation";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/addlocation" element={<AddLocation />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

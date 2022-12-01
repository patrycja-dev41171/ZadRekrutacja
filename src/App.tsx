import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/views/Home/Home";
import { Register } from "./components/views/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

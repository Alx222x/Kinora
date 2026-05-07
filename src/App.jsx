import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./signup";
import Welcome from "./Welcome"; // or whatever your homepage is called

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

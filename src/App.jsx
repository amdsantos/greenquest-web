import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import League from "./pages/League/League";
import Learn from "./pages/Learn/Learn";
import Game from "./pages/Quiz";
import { Store } from "./pages/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ligas" element={<League />} />
        <Route path="/aprender" element={<Learn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<Game />} />
        <Route path="/loja" element={<Store />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

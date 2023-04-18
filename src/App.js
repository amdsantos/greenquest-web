import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "./components/Details";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./components/NotFound";


export function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

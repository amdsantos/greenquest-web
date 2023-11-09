import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./shared/NotFound";
import Game from "./pages/Home/quiz/Game";
import { Store } from "./pages/Home/Store/Store";


export function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/detalhes/:id" element={<Details />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="loja" element={<Store/>} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

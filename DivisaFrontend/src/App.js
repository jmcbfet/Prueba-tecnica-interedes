import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConversionPage, HistorialPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConversionPage />} />
        <Route path="/historial" element={<HistorialPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

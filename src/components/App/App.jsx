import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import HomePage from "../../pages/HomePage/HomePage";
import Navigation from "../Navigation/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>проверка связи</div>} />
        <Route path="/movies" element={<div>проверка но другая </div>} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <HomePage />
    </>
  );
}

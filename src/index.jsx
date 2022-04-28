import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ArtistsPage from "./pages/ArtistsPage/ArtistsPage";
import SongsPage from "./pages/SongsPage/SongsPage";
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ArtistsPage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

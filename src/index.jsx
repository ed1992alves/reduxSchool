import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ArtistsPage from "./pages/ArtistsPage/ArtistsPage";
import './index.scss';
import SongsPage from "./pages/SongsPage/SongsPage/SongsPage.jsx";
import { SinglePage } from "./pages/SongsPage/SinglePage/index.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ArtistsPage />} />
        <Route path="/songs" element={<SongsPage/>} />
        <Route path="/songs/:id" element={<SinglePage/>}/>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

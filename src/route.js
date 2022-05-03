import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import { SinglePage } from "./pages/SongsPage/SinglePage/index.jsx";
import SongsPage from "./pages/SongsPage/SongsPage/SongsPage.jsx";


export const RoutesApp = () => {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Artists />} />
          <Route path="/songs" element={<SongsPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
};

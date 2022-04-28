import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Artists />} />
          <Route path="/singles" element={<Singles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default App;

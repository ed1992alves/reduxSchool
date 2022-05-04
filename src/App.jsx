import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Outlet />
  </Provider>
);

export default App;

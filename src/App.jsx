import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
  <>
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  </>
);

export default App;

import employeeReducer from './reducer'
import {applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(employeeReducer, applyMiddleware(thunk))

export default store; 
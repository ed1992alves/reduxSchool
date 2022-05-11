import employeeReducer from './reducer'
import {applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore(employeeReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;

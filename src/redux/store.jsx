import {applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import youSongReducer from './reducer';

const store = createStore(youSongReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
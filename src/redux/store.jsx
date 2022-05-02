import { createStore } from 'redux';
import employeeReducer from './reducer'

const store = createStore(employeeReducer)

export default store; 
import youSongReducer from './reducer'
import { createStore } from 'redux'

const store = createStore(youSongReducer)

export default store;
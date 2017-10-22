import {combineReducers} from 'redux'
import usersReducer from './usersReducer'

// to be used in both client.js and src/helpers/createStore.js
export default combineReducers({
  users: usersReducer
})
import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import adminsReducer from './adminsReducer'

// to be used in both client.js and src/helpers/createStore.js
export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
})


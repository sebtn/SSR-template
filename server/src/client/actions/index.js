import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS'
export const fetUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.heroku.com/users')
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}
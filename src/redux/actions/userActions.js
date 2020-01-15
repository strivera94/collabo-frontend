const USERS_URL = 'http://localhost:3000/users';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;



const getUsersAction = usersArr => ({
  type: 'GET_USERS',
  payload: usersArr
})

const showUserAction = userObj => ({
  type: 'SHOW_USER',
  payload: userObj
})

const clearUserStateAction = () => ({
  type: 'CLEAR_USER_STATE'
})



const getUsers = () => dispatch => {
  fetch (USERS_URL)
  .then(r => r.json())
  .then(users => {
    dispatch(getUsersAction(users))
  })
}

const showUser = userId => dispatch => {
  fetch(SPECIFIC_USER_URL(userId))
  .then(r => r.json())
  .then(user => {
    dispatch(showUserAction(user))
  })
}

const clearUserState = () => dispatch => {
  dispatch(clearUserStateAction());
}
  


export default {
  getUsers,
  showUser,
  clearUserState
}
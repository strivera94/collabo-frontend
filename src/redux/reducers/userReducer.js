const initialState = {
  users: [],
  user: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'GET_USERS':
        return {
          ...state, 
          users: payload
        }

      case 'SHOW_USER':
        return {
          ...state,
          user: payload
        }

      case 'CLEAR_USER_STATE':
        return {
          ...state,
          user:{}
        }
      
      default:
        return state
    }
}

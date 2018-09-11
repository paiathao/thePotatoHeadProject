import { LOGIN_ACTIONS } from '../actions/loginActions';

const initialState = {
  isLoading: false,
  error: null,
  isAuthenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.AUTHENTICATE_USER:
      return { ...initialState, isAuthenticated: true }
    case LOGIN_ACTIONS.LOGOUT:
      return { ...initialState, isAuthenticated: false }  
    default:
      return state;
  }
}
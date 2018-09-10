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
    case LOGIN_ACTIONS.FETCH_USER_SUCCESS:
      return { ...state, isAuthenticated: action.payload }    
    default:
      return state;
  }
}
import {
  SEND_EMAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL
} from '../actions/emailActions';

const initialState = {
  isLoading: false,
  error: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return { isLoading: true, error: null };
    case SEND_EMAIL_SUCCESS:
      return initialState;
    case SEND_EMAIL_FAIL:
      return { isLoading: false, error: action.error } 
    default:
      return state;    
  }
}
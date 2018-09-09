import {
  GET_ALL_REQUESTS,
  GET_ALL_REQUESTS_SUCCESS,
  GET_ALL_REQUESTS_FAIL,
  TOGGLE_REQUEST,
  TOGGLE_REQUEST_SUCCESS,
  TOGGLE_REQUEST_FAIL,
  SET_CURRENT_OPENED_REQUEST
} from '../actions/requestActions';

const initialState = {
  all: [],
  isLoading: false,
  error: null,
  currentlyOpen: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_ALL_REQUESTS:
    case TOGGLE_REQUEST:
      return { ...state, isLoading: true }  

    case GET_ALL_REQUESTS_SUCCESS:
      return { ...state, all: action.payload, isLoading: false } 
    case TOGGLE_REQUEST_SUCCESS:
      const all = state.all.map(r => r._id === action.payload._id ? action.payload : r);
      return { ...state, all }
      
    case GET_ALL_REQUESTS_FAIL:
    case TOGGLE_REQUEST_FAIL:
      return { ...state, isLoading: false, error: action.error }  

    case SET_CURRENT_OPENED_REQUEST:
      return { ...state, currentlyOpened: action.payload }

    default:
      return state;
  }
}
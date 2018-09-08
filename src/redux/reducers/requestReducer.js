import {
  GET_ALL_REQUESTS,
  GET_ALL_REQUESTS_SUCCESS,
  GET_ALL_REQUESTS_FAIL,
  TOGGLE_REQUEST,
  TOGGLE_REQUEST_SUCCESS,
  TOGGLE_REQUEST_FAIL
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
      return { ...initialState, isLoading: true }  

    case GET_ALL_REQUESTS_SUCCESS:
      return { ...initialState, all: action.payload } 
    case TOGGLE_REQUEST_SUCCESS:
      const all = state.all.map(r => r._id === action.payload._id ? action.payload : r);
      return { ...initialState, all }
      
    case GET_ALL_REQUESTS_FAIL:
    case TOGGLE_REQUEST_FAIL:
      return { ...state, isLoading: false, error: action.error }  
    default:
      return state;
  }
}
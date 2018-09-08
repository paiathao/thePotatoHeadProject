import {
  GET_ALL_REQUESTS,
  GET_ALL_REQUESTS_SUCCESS,
  GET_ALL_REQUESTS_FAIL,
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
      return { ...initialState, isLoading: true }
    case GET_ALL_REQUESTS_SUCCESS:
      return { ...initialState, all: action.payload } 
    case GET_ALL_REQUESTS_FAIL:
      return { ...state, isLoading: false, error: action.error }  
    default:
      return state;
  }
}
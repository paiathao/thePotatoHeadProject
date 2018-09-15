import { 
  FORM_SUBMIT_START,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAIL
} from '../actions/formActions';

const initialState = {
  isLoading: false,
  error: null,
  success: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case FORM_SUBMIT_START:
      return {
        ...initialState,
        isLoading: true
      }
    case FORM_SUBMIT_SUCCESS:
      return {
        ...initialState,
        success: true
      }  
    case FORM_SUBMIT_FAIL: 
      return {
        ...initialState,
        error: action.error
      }  
    default:
      return state;
  }
}


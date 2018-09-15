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
    
    default:
      return state;
  }
}


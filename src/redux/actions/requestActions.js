// action types for SAGA
export const HANDLE_GET_ALL_REQUESTS = 'HANDLE_GET_ALL_REQUESTS';
export const HANDLE_TOGGLE_REQUEST = 'HANLDE_TOGGLE_REQUEST';

// Action types for reducers
export const GET_ALL_REQUESTS = 'GET_ALL_REQUEST';
export const GET_ALL_REQUESTS_SUCCESS = 'GET_ALL_REQUESTS_SUCCESS';
export const GET_ALL_REQUESTS_FAIL = 'GET_ALL_REQUEST_FAIL';

export const TOGGLE_REQUEST = 'TOGGLE_REQUEST';
export const TOGGLE_REQUEST_SUCCESS = 'TOGGLE_REQUEST_SUCCESS';
export const TOGGLE_REQUEST_FAIL = 'TOGGLE_REQUEST_FAIL';

export const SET_CURRENT_OPENED_REQUEST = 'SET_CURRENT_OPENED_REQUEST';

// SAGA action creators
export const handleGetAllRequests = () => ({
  type: HANDLE_GET_ALL_REQUESTS
});

export const handleToggle = id => ({
  type: HANDLE_TOGGLE_REQUEST,
  payload: id
});


// Reducer Action creators
export const getAllRequests = () => ({
  type: GET_ALL_REQUESTS
});

export const getAllRequestsSuccess = requests => ({
  type: GET_ALL_REQUESTS_SUCCESS,
  payload: requests
});

export const getAllRequestsFail = error => ({
  type: GET_ALL_REQUESTS_FAIL,
  error
});


export const updateRequest = () => ({
  type: TOGGLE_REQUEST
});

export const updateRequestSuccess = request => ({
  type: TOGGLE_REQUEST_SUCCESS,
  payload: request
});

export const updateRequestFail = error => ({
  type: TOGGLE_REQUEST_FAIL,
  error
});

export const setCurrentOpenedRequest = id => ({
  type: SET_CURRENT_OPENED_REQUEST,
  payload: id
});
// action types for SAGA
export const HANDLE_GET_ALL_REQUESTS = 'HANDLE_GET_ALL_REQUESTS';

// Action types for reducers
export const GET_ALL_REQUESTS = 'GET_ALL_REQUEST';
export const GET_ALL_REQUESTS_SUCCESS = 'GET_ALL_REQUESTS_SUCCESS';
export const GET_ALL_REQUESTS_FAIL = 'GET_ALL_REQUEST_FAIL';

export const handleGetAllRequests = () => ({
  type: HANDLE_GET_ALL_REQUESTS
});

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
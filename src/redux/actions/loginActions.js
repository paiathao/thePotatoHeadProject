export const LOGIN_ACTIONS = {
  LOGIN: 'LOGIN',
  CLEAR_LOGIN_ERROR: 'CLEAR_LOGIN_ERROR',
  REQUEST_START: 'REQUEST_START',
  LOGIN_REQUEST_DONE: 'LOGIN_REQUEST_DONE',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGIN_FAILED_NO_CODE: 'LOGIN_FAILED_NO_CODE',
  INPUT_ERROR: 'INPUT_ERROR',
  LOGOUT: 'LOGOUT',
  AUTHENTICATE_USER: 'AUTHENTICATE_USER',
  HANDLE_FETCH_USER: 'HANDLE_FETCH_USER',
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAIL: 'FETCH_USER_FAIL'
};

export const clearError = () => ({
  type: LOGIN_ACTIONS.CLEAR_LOGIN_ERROR,
});

export const triggerLogin = (password) => ({
  type: LOGIN_ACTIONS.LOGIN,
  payload: password
});

export const triggerLogout = () => ({
  type: LOGIN_ACTIONS.LOGOUT,
});

export function formError() {
  return {
    type: LOGIN_ACTIONS.INPUT_ERROR,
    payload: 'Enter your username and password!',
  };
}

export const handleFetchUser = () => ({
  type: LOGIN_ACTIONS.HANDLE_FETCH_USER
});

export const fetchUser = () => ({
  type: LOGIN_ACTIONS.FETCH_USER
});

export const fetchUserSuccess = isAuthenticated => ({
  type: LOGIN_ACTIONS.FETCH_USER_SUCCESS,
  payload: isAuthenticated
});

export const fetchUserFail = error => ({
  type: LOGIN_ACTIONS.FETCH_USER_FAIL,
  error
});

export const LOGIN_ACTIONS = {
  LOGIN: 'LOGIN',
  CLEAR_LOGIN_ERROR: 'CLEAR_LOGIN_ERROR',
  REQUEST_START: 'REQUEST_START',
  LOGIN_REQUEST_DONE: 'LOGIN_REQUEST_DONE',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGIN_FAILED_NO_CODE: 'LOGIN_FAILED_NO_CODE',
  INPUT_ERROR: 'INPUT_ERROR',
  LOGOUT: 'LOGOUT',
  AUTHENTICATE_USER: 'AUTHENTICATE_USER'
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

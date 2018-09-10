// Saga Action types
export const HANDLE_SEND_EMAIL = 'HANDLE_SEND_EMAIL';


// Reducer action types
export const SEND_EMAIL = 'SEND_EMAIL';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const SEND_EMAIL_FAIL = 'SEND_EMAIL_FAIL';


export const handleSendEmail = email => ({
  type: HANDLE_SEND_EMAIL,
  payload: email
});

export const sendEmail = () => ({
  type: SEND_EMAIL
});

export const sendEmailSuccess = () => ({
  type: SEND_EMAIL_SUCCESS
});

export const sendEmailFail = error => ({
  type: SEND_EMAIL_FAIL,
  error
});
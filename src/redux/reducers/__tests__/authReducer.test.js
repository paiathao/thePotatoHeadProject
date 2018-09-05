import authReducer from '../authReducer';

describe('authReducer', () => {

  const initialState = {
    isLoading: false,
    error: null,
    isAuthenticated: false
  }

  it('returns initial state with undefined action type', () => {
    const action = { type: {} }
    expect(authReducer(undefined, action)).toEqual(initialState);
  });

  it('resets isLoading and error once authenticated with AUTHENTICATE_USER', () => {
    const action = { type: 'AUTHENTICATE_USER' };
    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isAuthenticated: true
    });
  });

  it('resets to initialState when after logout with UNAUTHENTICATE_USER', () => {
    const action = { type: 'UNAUTHENTICATE_USER' };
    expect(authReducer({ ...initialState, isAuthenticated: true }, action)).toEqual(initialState);
  });
});
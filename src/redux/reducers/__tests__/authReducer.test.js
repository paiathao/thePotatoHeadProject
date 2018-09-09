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

  it('unauthenticated on user logout', () => {
    const action = { type: 'LOGOUT' }
    const state = { ...initialState, isAuthenticated: true }
    expect(authReducer(state, action).isAuthenticated).toEqual(false);
  });

});
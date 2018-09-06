const initialState = {
  isLoading: false,
  error: null,
  isAuthenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return { ...initialState, isAuthenticated: true }
    default:
      return state;
  }
}
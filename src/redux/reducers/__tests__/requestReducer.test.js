import requestReducer from '../requestReducer';

const initialState = {
  requests: [],
  isLoading: false,
  error: null,
  currentlyOpen: null
}

describe('requestReducer', () => {
  it('will return an initial state on load', () => {
     const result = requestReducer();
     expect(result).toEqual(initialState);
  });
});
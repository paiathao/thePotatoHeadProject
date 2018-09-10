import requestReducer from '../requestReducer';

const initialState = {
  all: [],
  isLoading: false,
  error: null,
  currentlyOpen: null
}

describe('requestReducer', () => {
  it('will return an initial state on load', () => {
     const result = requestReducer(undefined, { type: '' });
     expect(result).toEqual(initialState);
  });

  it('will remove requests from state on logout', () => {
    const requests = ['request1', 'request2', 'request3'];
    const action = { type: 'LOGOUT' };
    const result = requestReducer({ requests: {all: requests }}, action);

    expect(result.all.length).toEqual(0);
  });

});
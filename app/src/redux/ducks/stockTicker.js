const FETCH_AAPL_DATA_SUCCEEDED = 'FETCH_AAPL_DATA_SUCCEEDED';
const FETCH_AAPL_DATA_FAILED = 'FETCH_AAPL_DATA_FAILED';
 
export function fetchAAPLDataSucceeded(payload) {
  return {
    type: FETCH_AAPL_DATA_SUCCEEDED,
    payload
  };
}
 
export function fetchAAPLDataFailed() {
  return { type: FETCH_AAPL_DATA_FAILED };
}
 
const initialState = {
  error: false,
  loading: true,
  data: []
};
 
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_AAPL_DATA_SUCCEEDED:
      const nextData = state.data;
 
      if (nextData.length >= 5) {
        nextData.shift();
      }
 
      nextData.push(action.payload);
      return {
        ...state,
        loading: false,
        data: [...nextData]
      };
    case FETCH_AAPL_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    default:
      return state;
  }
}
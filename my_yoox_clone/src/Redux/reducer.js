const initialState = {
  data: [],
  selectedProduct: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case 'GET_DATA_FAILURE':
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
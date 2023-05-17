// import data from "../db.json"
export const getData = () => {
    return async (dispatch) => {
      try {
        // Simulate asynchronous API call
        const response = await fetch('https://long-lime-fly-tux.cyclic.app/homeproducts');
        const data = await response.json();
  
        dispatch({ type: 'GET_DATA_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'GET_DATA_FAILURE', payload: error.message });
      }
    };
  };
  
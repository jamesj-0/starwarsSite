import { useRef, useReducer, useEffect } from 'react';
import axios from 'axios';

export default function useFetch({ inputObject }) {
  const requestObject = inputObject;
  const cache = useRef({});

  const initialState = {
    status: 'idle',
    error: null,
    data: [],
  };

  requestObject.headers = {
    'content-type': 'application/JSON',
    'Authorization': window.localStorage.getItem('access token') || '',
  };

  let options = {};

  /* For resuability we could add a request body for post & update methods */
  if (requestObject.method === 'GET') {
    options = {
      url: requestObject.endpoint,
      method: requestObject.method,
      headers: requestObject.headers,
    };
  }

  const [state, dispatch] = useReducer((reducerState, action) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'fetching' };
      case 'FETCHED':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'FETCH_ERROR':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return reducerState;
    }
  }, initialState);

  useEffect(() => {
    const cancelRequest = false;
    if (!requestObject.endpoint) return;
    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      if (cache.current[requestObject.endpoint]) {
        const data = cache.current[requestObject.endpoint];
        dispatch({ type: 'FETCHED', payload: data });
      } else {
        try {
          const response = await axios(options);
          const data = await response;
          cache.current[requestObject.endpoint] = data;
          if (cancelRequest) return;
          dispatch({ type: 'FETCHED', payload: data });
        } catch (error) {
          if (cancelRequest) return;
          if (error.response) {
            // When response status code is out of 2xx range
            dispatch({ type: 'FETCH_ERROR', payload: error.response });
          }
        }
      }
    };

    fetchData();

    // return function cleanup() {
    //   cancelRequest = true;
    // };
  }, [requestObject.endpoint]);

  return { state };
}

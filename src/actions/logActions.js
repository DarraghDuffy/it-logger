import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from './types';

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();
//     const res = await fetch('/logs');
//     const data = await res.json();
//     dispatch({
//       type: 'GET_LOGS',
//       payload: data,
//     });
//   };
// };

//this is a refactored approach to above
//Get Logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

//Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};

//Get Logs from server
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(log),
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};
//set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//Get Logs from server
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(log),
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

export const searchLogs = (search) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${search}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

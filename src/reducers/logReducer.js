import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        laoding: true,
      };
    case GET_LOGS: {
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    }
    case ADD_LOG: {
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        loading: false,
      };
    }
    case DELETE_LOG: {
      return {
        ...state,
        logs: state.logs.filter((log) =>
          log.id !== action.payload ? log : null
        ),
        loading: false,
      };
    }

    // obj.filter((item) => item.id !==3 ? item : null );
    case LOGS_ERROR: {
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

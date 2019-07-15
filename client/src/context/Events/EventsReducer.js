import {
  FETCH_EVENT,
  FETCH_EVENTS,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_STATE
} from '../types';

const initialState = {
  events: [],
  current: null
};

export default (state, action) => {
  switch (action.type) {
    case FETCH_EVENT:
      return {
        ...state,
        current: action.payload
      };
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case CLEAR_STATE:
      return initialState;

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };

    case SET_CURRENT:
      return {
        ...state,
        current: {
          ...state.current,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

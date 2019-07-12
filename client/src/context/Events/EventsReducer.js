import { FETCH_EVENT, FETCH_EVENTS, CLEAR_EVENTS } from '../types';

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
    case CLEAR_EVENTS:
      return {
        events: [],
        current: null
      };
    default:
      return state;
  }
};

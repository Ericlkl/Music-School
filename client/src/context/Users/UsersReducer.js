import { FETCH_USER, FETCH_USERS, CLEAR_USER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        current: { ...action.payload }
      };
    case FETCH_USERS:
      return {
        ...state,
        users: [...action.payload]
      };
    case CLEAR_USER:
      return {
        users: [],
        current: {}
      };
    default:
      return state;
  }
};

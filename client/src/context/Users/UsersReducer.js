import {
  FETCH_USER,
  FETCH_USERS,
  CLEAR_STATE,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_USER:
    case SET_CURRENT:
      return {
        ...state,
        current: {
          ...state.current,
          ...action.payload
        }
      };
    case FETCH_USERS:
      return {
        ...state,
        users: [...action.payload]
      };
    case CLEAR_STATE:
      return {
        users: [],
        current: {
          firstname: '',
          lastname: '',
          email: '',
          address: '',
          facebook: '',
          parent: '',
          avator: undefined
        }
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: {
          firstname: '',
          lastname: '',
          email: '',
          address: '',
          facebook: '',
          parent: '',
          avator: undefined
        }
      };
    default:
      return state;
  }
};

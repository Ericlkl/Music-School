import {
  FETCH_TEACHER,
  FETCH_TEACHERS,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_STATE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_TEACHER:
      return {
        ...state,
        current: action.payload
      };
    case FETCH_TEACHERS:
      return {
        ...state,
        teachers: action.payload
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

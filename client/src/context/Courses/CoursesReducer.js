import {
  FETCH_COURSE,
  FETCH_COURSES,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_STATE
} from '../types';

const initialState = {
  courses: [],
  current: null
};

export default (state, action) => {
  switch (action.type) {
    case FETCH_COURSE:
      return {
        ...state,
        current: action.payload
      };
    case FETCH_COURSES:
      return {
        ...state,
        courses: action.payload
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

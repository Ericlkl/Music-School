import {
  FETCH_COURSE,
  FETCH_COURSES,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_STATE
} from '../types';

const initialState = {
  courses: [],
  current: {
    name: '',
    desc: '',
    require: '',
    price: 0,
    startDate: '2019-01-01',
    endDate: '2019-12-30',
    instrument: '',
    img: ''
  }
};

export default (state, action) => {
  switch (action.type) {
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
        current: {
          name: '',
          desc: '',
          require: '',
          price: 0,
          startDate: '2019-01-01',
          endDate: '2019-12-30',
          instrument: '',
          img: ''
        }
      };
    case FETCH_COURSE:
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

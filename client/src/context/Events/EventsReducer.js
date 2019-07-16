import {
  FETCH_EVENT,
  FETCH_EVENTS,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_STATE
} from '../types';

const initialState = {
  events: [],
  current: {
    name: '',
    company: '',
    desc: '',
    place: '',
    date: '2019-01-01',
    tag: '',
    img: ''
  }
};

export default (state, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload
      };

    case CLEAR_STATE:
      return { ...initialState };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: {
          name: '',
          company: '',
          desc: '',
          place: '',
          date: '2019-01-01',
          tag: '',
          img: ''
        }
      };
    case FETCH_EVENT:
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

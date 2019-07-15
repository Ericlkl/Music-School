import { SHOW_MSGBOX, CLEAR_MSGBOX } from '../types';

const initState = {
  isShow: false,
  messages: {},
  type: 'positive'
};

export default (state = initState, action) => {
  switch (action.type) {
    case SHOW_MSGBOX:
      const newState = {
        ...action.payload,
        isShow: true
      };
      console.log(newState);
      return newState;
    case CLEAR_MSGBOX:
      return { ...initState };
    default:
      return state;
  }
};

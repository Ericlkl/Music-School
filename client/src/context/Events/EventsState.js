import React, { useReducer } from 'react';
import EventsContext from './EventsContext';
import EventsReducer from './EventsReducer';
import axios from 'axios';

import {
  FETCH_EVENTS,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_STATE
} from '../types';

const EventsState = props => {
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

  const [state, dispatch] = useReducer(EventsReducer, initialState);

  const fetchEvents = async () => {
    const res = await axios.get('/api/events');
    console.log(res.data);
    dispatch({
      type: FETCH_EVENTS,
      payload: res.data
    });
  };

  const clearEvents = () => dispatch({ type: CLEAR_STATE });

  const setCurrent = field => dispatch({ type: SET_CURRENT, payload: field });

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  return (
    <EventsContext.Provider
      value={{
        events: state.events,
        current: state.current,
        fetchEvents,
        clearEvents,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};

export default EventsState;

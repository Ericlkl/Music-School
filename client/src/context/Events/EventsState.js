import React, { useReducer } from 'react';
import EventsContext from './EventsContext';
import EventsReducer from './EventsReducer';
import { FETCH_EVENTS, CLEAR_EVENTS } from '../types';
import axios from 'axios';

const EventsState = props => {
  const initialState = {
    events: [],
    current: null
  };

  const [state, dispatch] = useReducer(EventsReducer, initialState);

  const fetchEvents = async () => {
    const res = await axios.get('/api/events');
    dispatch({
      type: FETCH_EVENTS,
      payload: res.data
    });
  };

  const clearEvents = () => {
    dispatch({
      type: CLEAR_EVENTS
    });
  };

  return (
    <EventsContext.Provider
      value={{
        events: state.events,
        current: state.current,
        fetchEvents,
        clearEvents
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};

export default EventsState;

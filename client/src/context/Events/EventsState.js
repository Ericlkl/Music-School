import React, {useReducer} from 'react';
import EventsContext from './EventsContext';
import EventsReducer from './EventsReducer';
import {FETCH_EVENT,FETCH_EVENTS} from '../types';
import axios from 'axios';

const EventsState = (props) => {

    const initialState = {
        events: [],
        current: null
    };

    const [state,dispatch] = useReducer(EventsReducer, initialState);

    const fetchEvents = async () => {
        const res = await axios.get('/api/events');
        dispatch({
            type: FETCH_EVENTS,
            payload: res.data
        });
    }

    return (
        <EventsContext.Provider value = {{
            events: state.events,
            current: state.current,
            fetchEvents
        }}>
            {props.children}
        </EventsContext.Provider>
    )
}

export default EventsState;
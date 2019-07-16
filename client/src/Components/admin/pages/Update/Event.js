import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Form from '../../Forms/Event';
import AdminPageFrame from '../../layout/AdminPageFrame';
import EventContext from '../../../../context/Events/EventsContext';
import MsgboxContext from '../../../../context/MsgBox/MsgboxContext';

const Events = props => {
  const eventId = props.match.params.id;
  const { showMsgBox } = useContext(MsgboxContext);
  const { clearEvents, current, fetchEvent, clearCurrent } = useContext(
    EventContext
  );

  const updateEvent = async () => {
    try {
      await axios.put(`/api/events/${eventId}`, current);
      showMsgBox('positive', 'Event Updated Successfully !');
      clearEvents();
      props.history.push('/admin/events');
    } catch (error) {
      showMsgBox('negative', 'Error');
    }
  };

  useEffect(() => {
    fetchEvent(eventId);
    return () => clearCurrent();
    // eslint-disable-next-line
  }, []);

  return (
    <AdminPageFrame>
      <div className='ui'>
        <h1 style={{ margin: '1rem 0rem' }} className='ui header breadcrumb'>
          <Link to='/admin/events' className='section'>
            Event
          </Link>
          <i className='right angle icon divider' />
          <div className='active section'>Update</div>
        </h1>

        <Form onSubmitAction={updateEvent} />
      </div>
    </AdminPageFrame>
  );
};

export default Events;

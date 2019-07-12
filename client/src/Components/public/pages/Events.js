import React, { useEffect, useContext } from 'react';

import PageFrame from '../layout/PageFrame';
import bg_img from '../../../assets/img/event_bg.jpg';
import EventsContext from '../../../context/Events/EventsContext';

const EventCard = props => {
  const { eventName, imageURI, place, description, tag, company } = props.event;

  return (
    <div className='event-card'>
      <div className='event-card__header'>
        <h3 className='event-card__header_host'>
          <i className='fas fa-users' /> {company}
        </h3>
      </div>
      <div className='event-card__content'>
        <img className='event-card_img' src={imageURI} alt='event-img' />
        <h3 className='event-card__content_title'>
          <i className='music icon' />
          {eventName}
        </h3>
        <h3 className='event-card__content_location'>
          <i className='building outline icon' />
          {place}
        </h3>
        <h3 className='event-card__footer_city'>{tag}</h3>
        <h3 className='event-card__content_date'>
          <i className='clock outline icon' />
          {Date().current}
        </h3>
        <p className='event-card__content_description'>{description}</p>
      </div>
    </div>
  );
};

const Events = props => {
  const { events, fetchEvents } = useContext(EventsContext);

  useEffect(() => {
    fetchEvents();
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <PageFrame
      heroImg={bg_img}
      heroTitle='Events'
      heroSubtitle='Jumb into Biggest Music Event in Aus'
    >
      <section className='events'>
        <h1 className='udl-heading'>Includes all events</h1>
        <div className='events__content'>
          {events.map(event => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </section>
    </PageFrame>
  );
};

export default Events;

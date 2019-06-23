import React from 'react';

import NavBar from '../public/NavBar';
import Hero from '../public/Hero';
import Footer from '../public/Footer';

import bg_img from '../../assets/img/event_bg.jpg'

const EventCard = ({eventName, imageURI, date, place, description, tag, company}) => {

    var newDate = new Date(date.toString());
    return (
        <div className="event-card">   
            <div className="event-card__header">
                <h3 className="event-card__header_host"><i className="fas fa-users"></i> {company}</h3>
            </div>   
            <div className="event-card__content">
                <img className="event-card_img" src={imageURI} alt="event-img"/>
                <h3 className="event-card__content_title"><i className="music icon"></i>{eventName}</h3>
                <h3 className="event-card__content_location"><i className="building outline icon"></i>{place}</h3>
                <h3 className="event-card__footer_city">{tag}</h3>
                <h3 className="event-card__content_date"><i className="clock outline icon"></i>{Date().current}</h3>
                <p className="event-card__content_description">{description}</p>
            </div>
        </div>
    )
}

const Events = (props) => {

    return(
        <div>
            <NavBar pages="events"/>
            <Hero bg_img={bg_img}
                title="Events"
                subtitle="Jumb into Biggest Music Event in Aus"/>

                <section className="events">
                    <h1 className="udl-heading">Includes all events</h1>
                    <div className="events__content">
                    </div>
                </section>
            <Footer/>
        </div>
    )
}

export default Events;
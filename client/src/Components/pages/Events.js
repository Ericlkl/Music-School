import React, {Component} from 'react';
import {connect} from 'react-redux';

import NavBar from '../public/NavBar';
import Hero from '../public/Hero';
import Footer from '../public/Footer';
import { fetchEvents} from '../../Actions/index'

import bg_img from '../../assets/img/event_bg.jpg'

const EventCard = (props) => {
    const {eventName, imageURI, date, place, description, tag, company} = props.event;
    var newDate = new Date(date.toString());
    return (
        <div className="event-card">      
            <div className="event-card__content">
            <img className="event-card_img" src={imageURI} alt="event-img"/>
            <h1 className="event-card__content_title">{eventName}</h1>
            <h3 className="event-card__content_location"><i className="building outline icon"></i>{place}</h3>
            <h3 className="event-card__content_date"><i className="clock outline icon"></i>{Date().current}</h3>
            <p className="event-card__content_description">{description}</p>
            </div>
            
            <div className="event-card__footer">
            <p className="event-card__footer_host">{company}</p>
            <p className="event-card__footer_city">{tag}</p>
            </div>
        </div>
    )
}

class Events extends Component{
    componentDidMount(){
        this.props.fetchEvents();
    }

    render(){
        return(
            <div>
                <NavBar pages="events"/>
                <Hero bg_img={bg_img}
                    title="Events"
                    subtitle="Jumb into Biggest Music Event in Aus"/>

                    <section className="events">
                        <h1>Includes all events</h1>
                        <div className="events__content">
                            {
                                this.props.events.map(
                                    event => 
                                        <EventCard event={event}/>
                                )
                            }
                        </div>
                    </section>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = ({events}) => ({events})

export default connect( mapStateToProps, {
    fetchEvents
})(Events);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Footer from './Footer';
import { fetchEvents} from '../Actions/index'

import bg_img from '../assets/img/event_bg.jpg'

const EventCard = (props) => {
    const {eventName, imageURI, date, place, description, tag, company} = props.event;
    var newDate = new Date(date.toString());

    return (
        <div className="card">
            <div className="image">
                <img src={imageURI} alt="event-img"/>
            </div>
            <div className="content">
                <div className="header">{eventName}</div>

                <div className="meta">
                    <p>{tag.map(skill => skill)}</p>
                    <p> <i className="calendar alternate outline icon"></i>
                    { newDate.toLocaleTimeString() + " " + newDate.toLocaleDateString() }</p>
                </div>

                <div className="description">
                    {description}
                </div>
                
            </div>
            
            <div className="extra content">
                <span className="right floated">
                    By {company}
                </span>
                <span>
                    <i className="map marker icon"></i>
                    {place}
                </span>
            </div>
        </div>
    )
}

class Events extends Component{
    componentDidMount(){
        this.props.fetchEvents();
    }

    render(){
        console.log(this.props.events);

        return(
            <div>
                <NavBar page="events"
                        backgroundImg={bg_img}
                        title="Events"
                        subtitle="Jumb into Biggest Music Event in Aus"/>

                <div style={{ margin: "50px"}} className="ui container">
                    <div className="ui link cards">
                    {this.props.events.map(event => <EventCard event={event} /> )}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = ({events}) => ({events})

export default connect( mapStateToProps, {
    fetchEvents
})(Events);
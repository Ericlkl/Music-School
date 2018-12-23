import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import bg_img from '../assets/img/event_bg.jpg'

class Events extends Component{
    render(){
        return(
            <div>
            <NavBar page="events"
                    backgroundImg={bg_img}
                    title="Events"
                    subtitle="Jumb into Biggest Music Event in Aus"/>
                <h1>
                    Events
                </h1>
                <Footer/>
            </div>
        )
    }
}

export default Events;
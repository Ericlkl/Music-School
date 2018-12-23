import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Footer from './Footer';
import { fetchEvents} from '../Actions/index'

import bg_img from '../assets/img/event_bg.jpg'

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
                <h1>
                    Events
                </h1>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = ({events}) => ({events})

export default connect( mapStateToProps, {
    fetchEvents
})(Events);
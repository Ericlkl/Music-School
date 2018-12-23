import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import bg_img from '../assets/img/home_bg.jpg'


class Home extends Component{
    render(){
        return(
            <div>
                <NavBar page="home"
                        backgroundImg={bg_img}
                        title="Pineland Music School"
                        subtitle="Learning Music is easier than you think"/>
                <h1>Home</h1>
                <Footer/>
            </div>
        )
    }
}

export default Home;
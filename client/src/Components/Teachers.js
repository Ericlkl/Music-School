import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import bg_img from '../assets/img/teachers_bg.jpg'


class Teachers extends Component{
    render(){
        return(
            <div>
            <NavBar page="teachers"
                    backgroundImg={bg_img}
                    title="Teachers"
                    subtitle="Professional Teachers in Australia"/>
                
                <h1>Teachers</h1>
                <Footer/>
            </div>
        )
    }
}

export default Teachers;
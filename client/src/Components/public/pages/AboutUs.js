import React, {useState, useContext} from 'react';

import InfoSection from '../layout/InfoSection';
import PageFrame from '../layout/PageFrame';

import school_img from '../../../assets/img/road.jpg'
import contact_img from '../../../assets/img/mailbox.jpg'
import bg_img from '../../../assets/img/aboutus_bg.jpg'
import join_us from '../../../assets/img/join_us.jpg'
import axios from 'axios';
import MsgBoxContext from '../../../context/MsgBox/MsgboxContext';


const QuestionForm = () => {

    const formInitState = {
        provider: "",
        phoneNumber: "",
        email: "",
        message: ""
    };

    const [form,setForm] = useState({...formInitState});

    const { showMsgBox } = useContext(MsgBoxContext);

    const { provider, phoneNumber, email, message } = form;

    const onChange = (e) => setForm({ ...form, [e.target.name] : e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/questions', form);
            
            showMsgBox("positive", "Form Submited Successfully !");
            setForm({...formInitState});
            
        } catch (error) {
            showMsgBox("positive", error.response.data.errors );
        }
    }

    return(
        <InfoSection title="Question" img={join_us} imgPosition="left">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Name :</label>
                    <input type="text" name="provider" value={provider} onChange={onChange} required/>
                </div>

                <div className="field">
                    <label>Phone :</label>
                    <input type="text" name="phoneNumber" value={phoneNumber} onChange={onChange}/>
                </div>

                <div className="field">
                    <label>Email :</label>
                    <input type="email" name="email" value={email} onChange={onChange} required/>
                </div>

                <div className="field">
                    <label>Question: </label>
                    <textarea name="message" required onChange={onChange} value={message}></textarea>
                </div>

                <input className="ui button" type="submit" value="Submit"/>

            </form>
        </InfoSection>
    )
}

const AboutUs = () => { 
    return(
        <PageFrame page="aboutus"
            heroImg={bg_img} 
            heroTitle="About Us" 
            heroSubtitle="Professional Music Insititute in Australia">

            <InfoSection title="Our History" imgPosition="left" img={school_img} >
                <h2>35 Years Teaching Experience</h2>
                <p>Pineland Music school was established in {2019 - 35}. It has passed a long time that teaching different kind of people about playing music and theory.  </p>
            </InfoSection>

            <InfoSection title="Contact US" img={contact_img} bg_color={{backgroundColor: 'rgb(233, 233, 233)'}} >
                <h2>Telphone Number :</h2>
                <h3>0415 869 377</h3>
                <h2>Address :</h2>
                <h3>70 Pinelands Rd, Sunnybank Hills QLD 4109 Austrlia</h3>
                <h2>Email :</h2>
                <h3> pineland_music_school@gmail.com </h3>
            </InfoSection>
            <QuestionForm/>
        </PageFrame>
    )

}

export default AboutUs;
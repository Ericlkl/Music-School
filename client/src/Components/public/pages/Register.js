import React, {useState, useContext, useEffect} from 'react';
import AuthContext from '../../../context/Auth/AuthContext';

const RegisterForm = () => {

  // State
  const formInitState = {
    firstname : "",
    lastname: "",
    facebook: "",
    address: "",
    email: "",
    type: "Student",
    password: "",
    password2: ""
  };

  const [form, setForm] = useState({...formInitState});

  const { password, password2 } = form;

  // Context State
  const {register} = useContext(AuthContext);

  // Form Component Function
  const onChange = (e) => setForm({...form, [e.target.name] : e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === password2){
        register(form);
        setForm(formInitState);
    }
    else {
        alert("Confirm password doesnot match the first password");
    }
  };

  return (
    <form onSubmit={onSubmit} className="ui form register-form">

        <h2 className="form-title">Register Form</h2>

        <div className="field">
            <label>* Name</label>

            <div className="two fields">
                <div className="field">
                    <input className="text-field" type="text" name="firstname" onChange={onChange} placeholder="First Name" required/>
                </div>

                <div className="field">
                    <input className="text-field" type="text" name="lastname" onChange={onChange} placeholder="Last Name" required/>
                </div>
            </div>
        </div>

        <div className="field input-field">
            <label>* Email</label>
            <input className="text-field" type="email" name="email" placeholder="abc@email.com" onChange={onChange} required/>
        </div>

        <div className="field input-field">
            <label>Facebook</label>
            <input className="text-field" type="text" name="facebook" placeholder="Facebook Username" onChange={onChange}/>
        </div>

        <div className="field input-field">
            <label>Address</label>
            <input className="text-field" type="text" name="address" placeholder="Street/Suburb/City/Nation" onChange={onChange}/>
        </div>

        <div className="field input-field">
            <label>* Password</label>
            <input className="text-field" type="password" name="password" onChange={onChange} required minLength="6"/>
        </div>

        <div className="field input-field">
            <label>* Confirm Password</label>
            <input className="text-field" type="password" name="password2" onChange={onChange} required minLength="6"/>
        </div>

        <div className="terms-field">
            <input type="checkbox" required className="hidden"/>
            <label>I agree to the Terms and Conditions</label>
        </div>

        <div className="field">
            <input type="submit" className="ui button" value="Submit" />
        </div>

    </form>
  )
}

const Register = ({history}) => {

  // Context State
  const {isAuthenticated, loadUser} = useContext(AuthContext);

  // ComponentDidMount
  useEffect(() => {
    loadUser();
    if (isAuthenticated){
      history.push("/");
    }
  },[isAuthenticated,history])

  return(
    <div className="signup">
      <h1 className="udl-heading logo">Pineland Music School</h1>
      <RegisterForm/>
    </div>
  )
}

export default Register;
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useStateValue } from "../../stateprovider";

import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';


function Signup() {

  const [{basket},dispatch1]=useStateValue();
  const initialState = { img:'',firstName: '', lastName: '', email: '', password: '', confirmPassword: '',isAdmin:basket.isAdmin };
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
 
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
console.log(initialState)
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    setForm(initialState);
    e.preventDefault();
      dispatch(signup(form, history));
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  return (
    <div className='login'>
        <div className='login_right'>
        <img src="https://african-price-assets.s3.eu-central-1.amazonaws.com/africanprice/e0ja77mm8ai187iu1vdj.png"/>
        
        </div>    
        <div className='login_left'>
        
        <div className='login_left_top'>
        
        <img src="https://ppa.gov.gh/wp-content/uploads/2019/01/logo.jpg"/>
        </div>
        <div className='login_left_middle'>
        <h3>sign Up</h3>
        
        </div>  
        <form className="" onSubmit={handleSubmit}>
        <div className='login_left_bottom'>
        <input name="firstName" label="First Name"  onChange={handleChange} type="text"placeholder='First name'/>
        <input name="lastName" label="Last Name" onChange={handleChange} type="text"placeholder='lastname'/>
        <input  name="email" label="Email Address"  onChange={handleChange} type="email" placeholder='email'/>
        <input  name="password" label="Password"  onChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} placeholder='Password'/>
        <input name="confirmPassword" label="Repeat Password"  onChange={handleChange} type="password"  placeholder='Repeat password'/>
        <button type="submit">SignUp</button>
        <p>have an account?<Link to="/login"> Signin</Link></p>
        </div> 
        </form>
        <div className='login_left_footer'>
        
        
        </div> 
        </div>    

    </div>
  )
}

export default Signup
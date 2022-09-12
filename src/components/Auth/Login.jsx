import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'
import './login.css'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
const initialState = {  email: '', password: '' };


function Login() {
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
    e.preventDefault();
    setForm(initialState);
      dispatch(signin(form, history));
  };
// GOOGLE AUTH PROVIDER
const provider = new GoogleAuthProvider();
const windowSign=()=>{
    signInWithPopup(auth,provider )
    .then((data) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const result =data.user;
    const token =credential.accessToken;
    dispatch({ type: AUTH, data: { result, token } });
    
    history.push('/');
    
    
    // The signed-in user info.

}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    }); 
}

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
        <h3>sign In</h3>
        
        </div> 
        <form className="" onSubmit={handleSubmit}> 
        <div className='login_left_bottom'>
        <label>Email Address</label>
        <input name="email" label="email"  onChange={handleChange} type="email" placeholder='email address'/>
        <label>Password</label>
        <input name="password" label="password"  onChange={handleChange} type="password" placeholder='Password'/>
        <button>Login</button>
        <p>dont have an account?<Link to="/signup">Signup</Link> </p>
        </div> 
       </form>
        <div className='login_left_footer'>
      
        
        </div> 
        </div>    

    </div>
  )
}

export default Login
import React,{useState} from 'react'
import '../projects/ongoing.css'
import Appbar from '../Appbar/Appbar'
import Signup from '../Auth/Signup'
import { Chart } from '../Body/Chart'
import axios from "axios";
import { Search } from 'react-bootstrap-icons'
import Login from '../Auth/Login'
function Ongoing() {
  const [data,setData]=useState([])
axios.get('http://localhost:8000/results1')
  .then(res => {
    console.log(res.data);
    setData(res.data);
  });

  console.log(data,"data is here")
  return (
    <div className='ongoing'>
        <Appbar/>
      <div className='ongoing_main'  >
   
    <div className='procard'  >
    
<Login/>

        </div>  

      </div>
    </div>
  )
}

export default Ongoing